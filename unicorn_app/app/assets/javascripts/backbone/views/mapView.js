App.Views.Map = Backbone.View.extend({
	el: '#map',
	initialize: function(){
		console.log('map view initialized');
        
		var latlng = new google.maps.LatLng(40.7127,-74.0059);

		var myOptions ={
			zoom: 13,
			center: latlng,
            panControl: true,
  			zoomControl: true,
  			mapTypeControl: true,
			scaleControl: true,
			overviewMapControl: true
            };

		
		var map = new google.maps.Map(document.getElementById('map'),myOptions);
		var myLatLng = {lat: 40.7127, lng: -74.0059};
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map
		});

		
		$.get('/meetups/display', function (userJSON) {
          console.log(userJSON);
          gMapData = userJSON;
          gMapData = gMapData.results
          console.log(gMapData[0].venue.lat);
       	
		var infowindow = new google.maps.InfoWindow();
		
		for (var i = 0; i < gMapData.length; i++){
			
			var venueTest = gMapData[i].venue //tests to see if venue if present in JSON obj
			
			var latitude = (venueTest == undefined) ? myLatLng.lat : gMapData[i].venue.lat;
			var longitude= (venueTest == undefined) ? myLatLng.lng : gMapData[i].venue.lon;
			console.log(latitude);
			var marker = new google.maps.Marker({
			position: new google.maps.LatLng(latitude, longitude),
			map: map,
			label: i.toString(),
			title: gMapData[i].name.toString(),
			animation: google.maps.Animation.DROP
			});


			google.maps.event.addListener(marker, 'click', (function(marker, i){
				return function(){
					infowindow.setContent(gMapData[i].description);
					infowindow.maxWidth = 200;
					infowindow.maxHeight = 200;
					infowindow.open(map, marker);
				}
			})(marker, i));

			// var infowindow = new google.maps.InfoWindow({
			// content: gMapData[i].description
			// });
			// marker.addListener('click', function() {
   //  		infowindow.open(map, marker)});		

		}
	

	})


	}	

}); 