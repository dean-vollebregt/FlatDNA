const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Data = require('./services/flatmatesData');
// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res, next) {

  res.sendFile(__dirname + '/index.html');

});

app.post('/submit-data-area', function(req, res, next) {


  let list = Data.flatmatesData(req.body.suburb, req.body.postcode);

  res.send('You sent "' + req.body.suburb  + list + '".');
});

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});