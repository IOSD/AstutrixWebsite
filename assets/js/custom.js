/* Add here all your JS customizations */


function myMap() {

	singapore = new google.maps.LatLng(1.2854739000000153,103.8479511) ;
	delhi = new google.maps.LatLng(28.4230467,77.100811) ; 

	info = "<div><h6>Singapore Office</h6><p></p>35th and 36th Floor, UOB Plaza 1, 80 Raffles Place,Singapore, 048624</div>"
	info1 = "<div><h6>Delhi Office</h6><p></p>Level 4, Vatika Atrium, DLF Golf Course Road, Gurgaon, 122011</div>"


    var mapOptions = {
        center: new google.maps.LatLng(0,0) ,
        zoom: 2,
        scrollwheel: false   
    }


	var map = new google.maps.Map(document.getElementById("map"), mapOptions);

	var infowindow = new google.maps.InfoWindow({
    	content: info
  	});


	var infowindow1 = new google.maps.InfoWindow({
    	content: info1
  	});



	var marker = new google.maps.Marker({
          position: singapore,
          label : "A" ,
          // icon : "http://img.freepik.com/free-icon/city_318-112631.jpg?size=338c&ext=jpg" ,
          map: map
        });

	var marker1 = new google.maps.Marker({
      	position: delhi ,
      	label : "B" ,
      	// icon : "http://img.freepik.com/free-icon/city_318-112631.jpg?size=338c&ext=jpg" ,
      	map: map
    });

	marker.addListener('mouseover', function() {
    	infowindow.open(map, marker);
  	});
	marker.addListener('mouseout', function() {
    	infowindow.close(map, marker);
  	});

	marker1.addListener('mouseover', function() {
    	infowindow1.open(map, marker1);
  	});
	marker1.addListener('mouseout', function() {
    	infowindow1.close(map, marker1);
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
