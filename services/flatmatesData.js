const request = require('request-promise');
const cheerio = require('cheerio');


function parseHTML(html){

  let $ = cheerio.load(html);

    let list = [];
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
        image : image
      };

      list.push(houseData);
    });

    return list;
}

async function flatmatesData(suburb, postcode) {

  let searchUrl = `https://flatmates.com.au/rooms/${suburb}-${postcode}`;

  try {
    let html = await request.get(searchUrl);
    let result = parseHTML(html);
      return (result);
  } catch (err) {
    console.log('Got an error:', err.message)
  }

}

//flatmatesData('unley', '5061');

module.exports.flatmatesData = flatmatesData;
