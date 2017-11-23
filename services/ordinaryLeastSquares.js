const MLR = require('ml-regression-multivariate-linear');

function ordinaryLeastSquares(listOfRoomObjects){

  let x = [];
  let y = [];

  listOfRoomObjects.forEach(function(roomObject){
    y.push([roomObject.price]);
    x.push([roomObject.billsIncluded, roomObject.bathroom, roomObject.flatmates]);
  });

  let mlr = new MLR(x, y);

  return mlr;
}

module.exports.ordinaryLeastSquares = ordinaryLeastSquares;


