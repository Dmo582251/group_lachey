App.Views.MeetupList = Backbone.View.extend({
	el: '#side-box',
	initialize: function(){
		console.log('meetup view works');
		this.renderMeetup();
		// this.renderMap();
		// this.listenTo(this.collection, 'reset', this.addAll);
	},
	renderMeetup: function(){
		var meetupList = App.meetupCollection.toJSON();
		console.log(meetupList);
		var data = {
			meets: meetupList[0].results
		}

		var meetupTemplate = HandlebarsTemplates['meetup'];
		var compiledMeetupTemplate = meetupTemplate(data);
		this.$el.append(compiledMeetupTemplate);
		console.log(data.meets)
		$('#main-box').append(HandlebarsTemplates['map']); 
	},
	// renderMap: function(){
	// 	var meetupList = App.meetupCollection.toJSON();
	// 	console.log('render map loaded');
	// 	var data = {
	// 		meets: meetupList[0].results
	// 	};
	// 	var map;
 //  		map = new google.maps.Map($('#map'),{
 //    	center: {lat: -34.397, lng: 150.644},
 //    	zoom: 8
 //  		});
	// }
})