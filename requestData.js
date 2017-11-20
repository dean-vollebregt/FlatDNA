const request = require('request');
const cheerio = require('cheerio');

request('https://flatmates.com.au/rooms/unley-5061', function (error, response, html) {
  let $ = cheerio.load(html);

  if (!error && response.statusCode === 200) {

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

    console.log(list);



  }
});