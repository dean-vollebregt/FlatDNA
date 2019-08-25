const prediction = require('../../lambda/services/predictPriceAndRank');
const OLS = require('../../lambda/services/ordinaryLeastSquares');
const listOfRoomObjects = require('./lambda.test.data').listOfRoomObjects;
const correctTestRankedRooms = require('./lambda.test.data').correctTestRankedRooms;
const expect = require('chai').expect;

describe('predictPriceAndRank', function() {
  let mlr;

  before(function () {
     mlr = OLS.ordinaryLeastSquares(listOfRoomObjects);
  });

  it('predicts share room prices then ranks them', function() {
    let rankedRooms = prediction.predictPriceAndRank(mlr, listOfRoomObjects);
    expect(rankedRooms).to.deep.equal(correctTestRankedRooms);
  })
});

