
function predictPriceAndRank(mlr, listOfRoomObjects){

  listOfRoomObjects.forEach(function(roomObject){
    let roomEstimation = mlr.predict([roomObject.billsIncluded, roomObject.bathroom, roomObject.flatmates]);
    roomObject.predictedPrice = parseFloat(roomEstimation).toFixed(2);
    roomObject.difference = parseFloat(roomObject.price - roomObject.predictedPrice).toFixed(2);
  });

  listOfRoomObjects.sort(function (a, b) {
    return a.difference - b.difference;
  });

  return listOfRoomObjects;
}

module.exports.predictPriceAndRank = predictPriceAndRank;