App.Views.Map = Backbone.View.extend({
	el: '#map',
	initialize: function(){
		console.log('map view initialized');
        

		var latlng = new google.maps.LatLng(40.7127,-74.0059);

		var myOptions ={
			zoom: 13,
			center: latlng,
			mapTypeControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
            streetViewControl: false,
            };

		this.$el.height($(window).height() - $("header").height());
		var map = new google.maps.Map(document.getElementById('map'),myOptions);
		var myLatLng = {lat: 40.7127, lng: -74.0059};
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map
		});

		
		
		// var gMapData;

		$.get('/meetups/display', function (userJSON) {
          console.log(userJSON);
          gMapData = userJSON;
          gMapData = gMapData.results
          console.log(gMapData[0].venue.lat);
       	var labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		var labelIndex = 0;	
		
		var infowindow = new google.maps.InfoWindow();
		
		for (var i = 0; i < gMapData.length; i++){
			var marker = new google.maps.Marker({
			position: new google.maps.LatLng(gMapData[i].group.group_lat, gMapData[i].group.group_lon),
			map: map,
			label: labels[i].toString(),
			// label: (''+i),
			animation: google.maps.Animation.DROP
			});


			google.maps.event.addListener(marker, 'click', (function(marker, i){
				return function(){
					infowindow.setContent(gMapData[i].description);
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