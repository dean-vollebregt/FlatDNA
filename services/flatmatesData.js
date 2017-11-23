const request = require('request-promise');
const cheerio = require('cheerio');

function parseHTML(html){

  let $ = cheerio.load(html);

    let listOfRooms = [];
    $('div[data-reactid="26"]').find('.content-column').each(function(i, element) {

      let price = $(element).find('.ribbon').text().match(/(\d{3})/g);
      let billsIncluded = $(element).find('.ribbon').text().match(/inc/g) ? 1 : 0;
      let bedroom = $(element).find('.bedroom').next().text();
      let bathroom = $(element).find('.bathroom').next().text();
      let occupant = $(element).find('.occupant').next().text();
      let url = 'https://flatmates.com.au' + $(element).find('.link').attr('href');
      let image = $(element).find('img').attr('src');

      let houseData = {
        price : parseInt(price),
        billsIncluded : parseInt(billsIncluded),
        bedroom : parseInt(bedroom),
        bathroom : parseInt(bathroom),
        occupant : parseInt(occupant),
        url : url,
        image : image,
        flatmates : parseInt(occupant > bedroom ? occupant : bedroom),
        predictedPrice: null
      };

      listOfRooms.push(houseData);
    });

    return listOfRooms;
}

async function flatmatesData(suburb, postcode) {

  let suburbFormatted = suburb.replace(/\s+/g, '-').toLowerCase();

  let searchUrl = `https://flatmates.com.au/rooms/${suburbFormatted}-${postcode}`;

  try {
    let html = await request.get(searchUrl);
    let parsedHtml = parseHTML(html);
      return (parsedHtml);
  } catch (err) {
    console.log('Got an error:', err.message)
  }



}

module.exports.flatmatesData = flatmatesData;
