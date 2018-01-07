const request = require('request-promise');
const expect = require('chai').expect;
const fmData = require('../../services/flatmatesData');

describe('flatmatesData', function() {

  let testSuburb = 'mile end';
  let testPostcode = '5031';
  let rawHTML;

  // before(async function () {
  //   rawHTML = fmData.flatmatesData(testSuburb, testPostcode);
  //   console.log(rawHTML);
  // });
  //
  // it('gets raw HTML from flatmates.com.au ', function() {
  //   expect(rawHTML).to.contain('<title>Mile End Rooms for Rent | SA 5031 | Flatmates.com.au</title>');
  // });


//   it('should go to before block but cant set timeout there', done =>  {
//   new Promise( async function (resolve, reject) {
//     rawHTML = fmData.flatmatesData(testSuburb, testPostcode);
//     resolve();
//   }).then( res => {
//     expect(rawHTML).to.contain('<title>Mile End Rooms for Rent | SA 5031 | Flatmates.com.au</title>');
//     done();
//   });
// }).timeout(4000);

});
