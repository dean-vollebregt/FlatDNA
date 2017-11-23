const MLR = require('ml-regression-multivariate-linear');

let listOfRoomObjects = [{"price":159,"billsIncluded":1,"bedroom":6,"bathroom":2,"occupant":7,"url":"https://flatmates.com.au/P395801","image":"https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/lfhkwwsvhshlh6ajmpwm.jpg","flatmates":7},{"price":160,"billsIncluded":1,"bedroom":5,"bathroom":1,"occupant":4,"url":"https://flatmates.com.au/P423042","image":"https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/mdclhykqvjcinm1ra7ux.jpg","flatmates":5},{"price":175,"billsIncluded":1,"bedroom":5,"bathroom":1,"occupant":4,"url":"https://flatmates.com.au/P423049","image":"https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/dxlneyeozphwirpxsbxi.jpg","flatmates":5},{"price":200,"billsIncluded":0,"bedroom":3,"bathroom":1,"occupant":1,"url":"https://flatmates.com.au/P606388","image":"https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/gkc5yqfl5rxroju9b26r.jpg","flatmates":3},{"price":160,"billsIncluded":0,"bedroom":6,"bathroom":4,"occupant":7,"url":"https://flatmates.com.au/P604617","image":"https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/tyojocec7a3ydhpjmzcp.jpg","flatmates":7},{"price":130,"billsIncluded":1,"bedroom":4,"bathroom":1,"occupant":4,"url":"https://flatmates.com.au/P603530","image":"https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/kfjr1lt1hccp21z9r63d.jpg","flatmates":4},{"price":152,"billsIncluded":0,"bedroom":3,"bathroom":2,"occupant":3,"url":"https://flatmates.com.au/P558970","image":"https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/gpyacn79uqpcdup3r0ds.jpg","flatmates":3},{"price":160,"billsIncluded":0,"bedroom":5,"bathroom":1,"occupant":4,"url":"https://flatmates.com.au/P595530","image":"https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/tq82on93v2kqq0yvgl0b.jpg","flatmates":5},{"price":100,"billsIncluded":0,"bedroom":4,"bathroom":1,"occupant":3,"url":"https://flatmates.com.au/P501980","image":"https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/pm2uhijztkv7jj1pwqkx.jpg","flatmates":4},{"price":140,"billsIncluded":0,"bedroom":3,"bathroom":1,"occupant":2,"url":"https://flatmates.com.au/P437556","image":"https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/uq93rv6nijoevxdl8y2b.jpg","flatmates":3},{"price":159,"billsIncluded":0,"bedroom":6,"bathroom":2,"occupant":7,"url":"https://flatmates.com.au/P595982","image":"https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/vhij2hxc9r4byhiarhzc.jpg","flatmates":7},{"price":220,"billsIncluded":1,"bedroom":1,"bathroom":1,"occupant":3,"url":"https://flatmates.com.au/P468167","image":"https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/dswxlw3qlgyulqkmoioc.jpg","flatmates":3}]

function ordinaryLeastSquares(listOfRoomObjects){

  let x = [];
  let y = [];
  let roomEstimation;

  listOfRoomObjects.forEach(function(roomObject){
    y.push([roomObject.price]);
    x.push([roomObject.billsIncluded, roomObject.bathroom, roomObject.flatmates]);
  });

  const mlr = new MLR(x, y);

  listOfRoomObjects.forEach(function(roomObject){
    roomEstimation = mlr.predict([roomObject.billsIncluded, roomObject.bathroom, roomObject.flatmates])
    roomObject.predictedPrice = roomEstimation;
  });

  //console.log(mlr.weights);

  console.log(listOfRoomObjects);
}

ordinaryLeastSquares(listOfRoomObjects);

