
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
      let listOfRoomObjects = await fmData.flatmatesData(req.body.suburb, req.body.postcode);
      let mlr = OLS.ordinaryLeastSquares(listOfRoomObjects);
      let rankedRooms = prediction.predictPriceAndRank(mlr, listOfRoomObjects);
      return res.render('result', { rankedRoomArray: rankedRooms});

    } catch(err){
      next(err);
    }

});


app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});

