
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

app.post('/result',

  async function(req, res, next) {

    try {
      // let listOfRoomObjects = await fmData.flatmatesData(req.body.suburb, req.body.postcode);
      // let mlr = OLS.ordinaryLeastSquares(listOfRoomObjects);
      // let rankedRooms = prediction.predictPriceAndRank(mlr, listOfRoomObjects);
      return res.render('result', { rankedRoomArray: rankedRooms});

    } catch(err){
      next(err);
    }

});


app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});

var rankedRooms = [ { price: 100,
  billsIncluded: 0,
  bedroom: 4,
  bathroom: 1,
  occupant: 3,
  url: 'https://flatmates.com.au/P501980',
  image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/pm2uhijztkv7jj1pwqkx.jpg',
  flatmates: 4,
  predictedPrice: '137.91',
  difference: '-37.91' },
  { price: 130,
    billsIncluded: 0,
    bedroom: 3,
    bathroom: 1,
    occupant: 3,
    url: 'https://flatmates.com.au/P547999',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/wy97er7fr7mxhy4g2ls3.jpg',
    flatmates: 3,
    predictedPrice: '154.69',
    difference: '-24.69' },
  { price: 178,
    billsIncluded: 1,
    bedroom: 5,
    bathroom: 2,
    occupant: 4,
    url: 'https://flatmates.com.au/P407579',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/dccyjvlwmojflp63rotg.jpg',
    flatmates: 5,
    predictedPrice: '198.55',
    difference: '-20.55' },
  { price: 140,
    billsIncluded: 0,
    bedroom: 3,
    bathroom: 1,
    occupant: 2,
    url: 'https://flatmates.com.au/P437556',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/uq93rv6nijoevxdl8y2b.jpg',
    flatmates: 3,
    predictedPrice: '154.69',
    difference: '-14.69' },
  { price: 180,
    billsIncluded: 1,
    bedroom: 4,
    bathroom: 1,
    occupant: 3,
    url: 'https://flatmates.com.au/P496982',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/ap0tdgzzq2d35tenxzzs.jpg',
    flatmates: 4,
    predictedPrice: '191.48',
    difference: '-11.48' },
  { price: 170,
    billsIncluded: 1,
    bedroom: 5,
    bathroom: 1,
    occupant: 4,
    url: 'https://flatmates.com.au/P423042',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/mdclhykqvjcinm1ra7ux.jpg',
    flatmates: 5,
    predictedPrice: '174.70',
    difference: '-4.70' },
  { price: 160,
    billsIncluded: 0,
    bedroom: 6,
    bathroom: 4,
    occupant: 7,
    url: 'https://flatmates.com.au/P604617',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/q8kpbdfri3tju4v6gkpr.jpg',
    flatmates: 7,
    predictedPrice: '159.12',
    difference: '0.88' },
  { price: 200,
    billsIncluded: 1,
    bedroom: 4,
    bathroom: 1,
    occupant: 4,
    url: 'https://flatmates.com.au/P203376',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/share-accommodation-cowra-street-mile-end-adelaide-L468479.jpg',
    flatmates: 4,
    predictedPrice: '191.48',
    difference: '8.52' },
  { price: 185,
    billsIncluded: 1,
    bedroom: 5,
    bathroom: 1,
    occupant: 4,
    url: 'https://flatmates.com.au/P423708',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/yla097ha0docrtccmdnc.jpg',
    flatmates: 5,
    predictedPrice: '174.70',
    difference: '10.30' },
  { price: 250,
    billsIncluded: 1,
    bedroom: 3,
    bathroom: 2,
    occupant: 2,
    url: 'https://flatmates.com.au/P615144',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/tcyr2lq7egehcn0mrwxw.jpg',
    flatmates: 3,
    predictedPrice: '232.11',
    difference: '17.89' },
  { price: 200,
    billsIncluded: 0,
    bedroom: 2,
    bathroom: 1,
    occupant: 1,
    url: 'https://flatmates.com.au/P454344',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/lnubuy1vajilwbplyzxg.jpg',
    flatmates: 2,
    predictedPrice: '171.47',
    difference: '28.53' },
  { price: 169,
    billsIncluded: 0,
    bedroom: 5,
    bathroom: 1,
    occupant: 4,
    url: 'https://flatmates.com.au/P423049',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/dxlneyeozphwirpxsbxi.jpg',
    flatmates: 5,
    predictedPrice: '121.13',
    difference: '47.87' } ];