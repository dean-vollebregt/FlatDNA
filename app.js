
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const fmData = require('./services/flatmatesData');
const OLS = require('./services/ordinaryLeastSquares');
const prediction = require('./services/predictPriceAndRank');

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from /public
app.use(express.static(__dirname + '/public'));

// view engine setup
app.engine( 'html', nunjucks.render);
app.set( 'view engine', 'html') ;
app.set('views', __dirname + '/public/html');

app.get('/',
  function (req, res) {
    res.render('index');
});

app.get('/search',
  function (req, res) {
    res.render('search');
});


// app.get('/result',
//   function (req, res) {
//     res.render('result');
// });



app.post('/result',

  async function(req, res, next) {

    try {
      // let listOfRoomObjects = await fmData.flatmatesData(req.body.suburb, req.body.postcode);
      // let mlr = OLS.ordinaryLeastSquares(listOfRoomObjects);
      // let rankedRooms = prediction.predictPriceAndRank(mlr, listOfRoomObjects);
      // console.log(rankedRooms);
      return res.render('result', { rankedRoomArray: rankedRooms});

    } catch(err){
      next(err);
    }

});


app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});


var rankedRooms =  [{ price: 100,
    billsIncluded: 0,
    bedroom: 3,
    bathroom: 1,
    occupant: 4,
    url: 'https://flatmates.com.au/P608178',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/vzh38lmqoteneuhjkjgl.jpg',
    flatmates: 4,
    predictedPrice: '150.64',
    difference: '-50.64' },
  { price: 130,
    billsIncluded: 1,
    bedroom: 4,
    bathroom: 1,
    occupant: 4,
    url: 'https://flatmates.com.au/P603530',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/kfjr1lt1hccp21z9r63d.jpg',
    flatmates: 4,
    predictedPrice: '161.19',
    difference: '-31.19' },
  { price: 152,
    billsIncluded: 0,
    bedroom: 3,
    bathroom: 2,
    occupant: 3,
    url: 'https://flatmates.com.au/P558970',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/gpyacn79uqpcdup3r0ds.jpg',
    flatmates: 3,
    predictedPrice: '164.38',
    difference: '-12.38' },
  { price: 160,
    billsIncluded: 0,
    bedroom: 6,
    bathroom: 4,
    occupant: 7,
    url: 'https://flatmates.com.au/P604617',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/q8kpbdfri3tju4v6gkpr.jpg',
    flatmates: 7,
    predictedPrice: '165.28',
    difference: '-5.28' },
  { price: 155,
    billsIncluded: 0,
    bedroom: 3,
    bathroom: 1,
    occupant: 3,
    url: 'https://flatmates.com.au/P607289',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/veg11xcfvxbetj8jbxtz.jpg',
    flatmates: 3,
    predictedPrice: '155.07',
    difference: '-0.07' },
  { price: 159,
    billsIncluded: 1,
    bedroom: 6,
    bathroom: 2,
    occupant: 7,
    url: 'https://flatmates.com.au/P395801',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/lfhkwwsvhshlh6ajmpwm.jpg',
    flatmates: 7,
    predictedPrice: '157.21',
    difference: '1.79' },
  { price: 160,
    billsIncluded: 1,
    bedroom: 5,
    bathroom: 1,
    occupant: 4,
    url: 'https://flatmates.com.au/P423042',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/mdclhykqvjcinm1ra7ux.jpg',
    flatmates: 5,
    predictedPrice: '156.76',
    difference: '3.24' },
  { price: 160,
    billsIncluded: 0,
    bedroom: 3,
    bathroom: 1,
    occupant: 2,
    url: 'https://flatmates.com.au/P305514',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/share-accommodation-ebor-mile-end-adelaide-L1094833.jpg',
    flatmates: 3,
    predictedPrice: '155.07',
    difference: '4.93' },
  { price: 174,
    billsIncluded: 1,
    bedroom: 5,
    bathroom: 2,
    occupant: 4,
    url: 'https://flatmates.com.au/P458795',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/pjzuhq6bin5badybcea1.jpg',
    flatmates: 5,
    predictedPrice: '166.07',
    difference: '7.93' },
  { price: 175,
    billsIncluded: 1,
    bedroom: 5,
    bathroom: 1,
    occupant: 4,
    url: 'https://flatmates.com.au/P423049',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/dxlneyeozphwirpxsbxi.jpg',
    flatmates: 5,
    predictedPrice: '156.76',
    difference: '18.24' },
  { price: 174,
    billsIncluded: 0,
    bedroom: 5,
    bathroom: 2,
    occupant: 5,
    url: 'https://flatmates.com.au/P608319',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/mr8sahn00gp0zfs2scsw.jpg',
    flatmates: 5,
    predictedPrice: '155.52',
    difference: '18.48' },
  { price: 200,
    billsIncluded: 0,
    bedroom: 3,
    bathroom: 1,
    occupant: 1,
    url: 'https://flatmates.com.au/P606388',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/gkc5yqfl5rxroju9b26r.jpg',
    flatmates: 3,
    predictedPrice: '155.07',
    difference: '44.93' } ];
