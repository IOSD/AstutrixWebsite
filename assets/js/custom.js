/* Add here all your JS customizations */


function myMap() {

	singapore = new google.maps.LatLng(1.2854739000000153,103.8479511) ;
	delhi = new google.maps.LatLng(28.4230467,77.100811) ; 


    var mapOptions = {
        center: singapore,
        zoom: 3,   
    }


	var map = new google.maps.Map(document.getElementById("map"), mapOptions);

	var marker = new google.maps.Marker({
          position: singapore,
          map: map
        });

	var marker1 = new google.maps.Marker({
      	position: delhi ,
      	map: map
    });

	

	// interval = setInterval(function() {

	// 	var curCenter = map.getCenter() ;
	// 	// console.log(curCenter);

	// 	lat = curCenter.lat()
	// 	console.log(lat)


	// 	zoomFluid = 10
	// 	setInterval(function() {
	// 		zoomFluid --;
 //    		map.setZoom(zoomFluid);
	// 	} , 250);



	// 	if (lat == singapore.lat()) {
	// 		console.log("Singapore");

	// 		map.panTo(delhi);
	// 		zoomTo(2, map);		
			
	// 	} else {

	// 		console.log("Delhi");

	// 		map.panTo(singapore);
			
	// 	}

	// 	setInterval(function() {
	// 		zoomFluid ++;
 //    		map.setZoom(zoomFluid);
	// 	} , 250);


	// } , 10000 );


}
