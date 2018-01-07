const prediction = require('../../../services/predictPriceAndRank');
const OLS = require('../../../services/ordinaryLeastSquares');

// Get test data
const testData = require('../../../tests/unit/server/server.test.data');
const listOfRoomObjects = testData.getListOfRoomObjects;
const correctTestRankedRooms = testData.getCorrectTestRankedRooms;

const expect = require('chai').expect;

let mlr;

describe('predictPriceAndRank', function() {

  before(function () {
     mlr = OLS.ordinaryLeastSquares(listOfRoomObjects);
  });

  it('predicts share room prices then ranks them', function() {
    let rankedRooms = prediction.predictPriceAndRank(mlr, listOfRoomObjects);
    expect(rankedRooms).to.deep.equal(correctTestRankedRooms);
  })
});

