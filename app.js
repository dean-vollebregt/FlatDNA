const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fmData = require('./services/flatmatesData');

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
        let list = await fmData.flatmatesData(req.body.suburb, req.body.postcode);
          return res.send(list);
    } catch(err){
      next(err);
    }



      //return res.send('You sent "' + req.body.suburb  + list + '".');





});

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});