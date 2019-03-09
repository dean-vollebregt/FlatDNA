'use strict';
console.log('Loading function');
const fmData = require('services/flatmatesData.js');
const OLS = require('services/ordinaryLeastSquares');
const prediction = require('services/predictPriceAndRank');

exports.handler = async function(event, context) {
    try {
        //console.log(event.suburb + ' ' + event.postcode);
        let rawHTML = await fmData.flatmatesData(event.suburb, event.postcode);
        let listOfRoomObjects = fmData.parseHTML(rawHTML);
        let mlr = OLS.ordinaryLeastSquares(listOfRoomObjects);
        let rankedRooms = prediction.predictPriceAndRank(mlr, listOfRoomObjects);

        console.log(rankedRooms);
        return rankedRooms;

    } catch(err){
        console.log(err);
    }
};
