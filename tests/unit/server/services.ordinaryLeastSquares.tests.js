const OLS = require('../../../services/ordinaryLeastSquares');
const expect = require('chai').expect;
const testData = require('../../../tests/unit/server/server.test.data');

const listOfRoomObjects = testData.getListOfRoomObjects;

describe('ordinaryLeastSquares', function() {

  it('calculates OLS coefficient', function() {
    let mlr = OLS.ordinaryLeastSquares(listOfRoomObjects);

    expect(mlr).to.deep.equal({
      weights:
        [ [ 38.16015985244388 ],
          [ 7.580387334767944 ],
          [ -7.373501383338443 ],
          [ 167.95173685828456 ] ],
      inputs: 3,
      outputs: 1,
      intercept: true });
  })
});
