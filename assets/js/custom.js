/* Add here all your JS customizations */


function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(1.2854739,103.8479511),
        zoom: 15,
        
    }


var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
          position: new google.maps.LatLng(1.2854739,103.8479511),
          map: map
        });


}