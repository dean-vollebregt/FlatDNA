const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fmData = require('./services/flatmatesData');
const OLS = require('./services/ordinaryLeastSquares');
const prediction = require('./services/predictPriceAndRank');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/',

  function (req, res) {
    res.sendFile(__dirname + '/index.html');

});

app.post('/submit-data-area',

  async function(req, res, next) {

    try {
        let listOfRoomObjects = await fmData.flatmatesData(req.body.suburb, req.body.postcode);
        let mlr = OLS.ordinaryLeastSquares(listOfRoomObjects);
        let rankedRooms = prediction.predictPriceAndRank(mlr, listOfRoomObjects);

          return res.send(rankedRooms);
    } catch(err){
      next(err);
    }

});

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});