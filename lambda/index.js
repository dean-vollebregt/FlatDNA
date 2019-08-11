'use strict';
console.log('Loading function');

const flatmatesData = require('services/flatmatesData.js').flatmatesData;
const parseHTML = require('services/flatmatesData.js').parseHTML;
const ordinaryLeastSquares = require('services/ordinaryLeastSquares').ordinaryLeastSquares;
const predictPriceAndRank = require('services/predictPriceAndRank').predictPriceAndRank;

exports.handler = async function(event, context) {
    try {
        let rawHTML = await flatmatesData(event.suburb, event.postcode);
        let listOfRoomObjects = parseHTML(rawHTML);
        let mlr = ordinaryLeastSquares(listOfRoomObjects);
        let rankedRooms = predictPriceAndRank(mlr, listOfRoomObjects);
        return rankedRooms;

    } catch(err){
        console.log(err);
    }
};
