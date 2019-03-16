function renderSuburbData(suburbData){

    suburbData.forEach(function(room) {

        let li = document.createElement('li');

        li.innerHTML =
            "<div id = 'container'>" +
            "<div id ='houseImage'>" +
            "<a href =" + room.url  + ">" +
            "<img src=" + room.image + ">" +
            "</a>" +
            "</div>" +
            "<div id ='houseStats'>" +
            "<p>Bedrooms:" + room.flatmates + "</p>" +
            "<p>Bathrooms:" + room.bathroom + "</p>" +
            //"<p>Bills Included:" + room.billsIncluded | replace("0", "no") | replace("1", "yes") }} </p>"
            "</div>" +
            "<div id ='housePrice'>" +
            "<p>Price:" + room.price + "</p>" +
            "<p>Estimated Price:" + room.predictedPrice + "</p>" +
            "<p id='difference'>Difference:" + room.difference + "</p>" +
            "</div>" +
            "</div>"+
            "<br>";

        document.getElementById("roomResults").appendChild(li);
    });
}

