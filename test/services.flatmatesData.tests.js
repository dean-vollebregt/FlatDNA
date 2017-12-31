const request = require('request-promise');
const expect = require('chai').expect;
const fmData = require('../services/flatmatesData');

describe('flatmatesData', function() {

  let testSuburb = 'mile-end';
  let testPostcode = '5031';
  let rawHTML;

  before(async function () {

    let searchUrl = `https://flatmates.com.au/rooms/${testSuburb}-${testPostcode}`;
    try {
       rawHTML = await request.get(searchUrl);
       console.log(rawHTML);
    }
    catch (err){
        console.log('Got an error:', err.message)
    }

    // rawHTML = await fmData.flatmatesData("mile-end", "5031");
  });

  it('gets raw HTML from flatmates.com.au ', function() {
    expect(rawHTML).to.contain('<title>Mile End Rooms for Rent | SA 5031 | Flatmates.com.au</title>');
  });

  // it('get staus 200 from flatmates.com.au ', function() {
  //   expect(openWeatherMap.status).to.equal(200);
  // });


});
