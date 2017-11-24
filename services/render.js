
function insertLi(rankedRooms){
  let list;
  rankedRooms.forEach(function(roomObject) {
    list += `<li>${roomObject.price} </li>`;
  });
  return list;
}

function renderHtml(rankedRooms){

  let list = insertLi(rankedRooms);

  let html =
    `<!DOCTYPE html>
    <html>
    <head>
    <meta charset ="utf-8">
      <title>Dean Vollebregt | Designer</title>
    <link rel="stylesheet" href="../css/normalize.css">
      <link href='https://fonts.googleapis.com/css?family=Changa+One|Open+Sans:400,400italic,700,700italic,800' rel='stylesheet' type='text/css'>
      <link rel="stylesheet" href="../css/main.css">
      <link rel="stylesheet" href="../css/responsive.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
      <header>
      <a href="/" id="logo">
      <h1>FlatDNA </h1>
      <h2>Share House Room Price Estimator</h2>
    </a>
    <nav>
    <ul>
    <li><a href="/" >Home</a></li>
      <li><a href="search.html">Search</a></li>
      <li><a href="result.html" class="selected">Result</a></li>
      </ul>
      </nav>
      </header>
      <div>

      ${list} 

     </div>
    <footer>
    <p>&copy; 2017 Dean V.</p>
    </footer>
    </body>
    </html>`;


  return html;
}

module.exports.renderHtml = renderHtml;