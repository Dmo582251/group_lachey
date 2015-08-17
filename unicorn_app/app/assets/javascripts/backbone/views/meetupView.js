
App.Views.MeetupList = Backbone.View.extend({
	// el: '#container',
	initialize: function(){
		console.log('meetup view works');
		this.renderMeetup();
		//this.renderMap();
		// this.listenTo(this.collection, 'reset', this.addAll);
	},

	meetUp: function () {
		this.$el.html(this.template());
		this.$el.appendTo('#main-box');
		$('#home_button').show();
		$('.logout').show();
	},
	renderMeetup: function(){
		console.log('rendermeetup fired')
		var meetupList = App.meetupCollection.toJSON();
		console.log(meetupList);
		var data = {
			meets: meetupList[0].results
		}

		var meetupTemplate = HandlebarsTemplates['meetUp'];
		var compiledMeetupTemplate = meetupTemplate(data);
		$('#side-box').append(compiledMeetupTemplate);
		console.log(data.meets)
		$('#main-box').append(HandlebarsTemplates['map']); 
	}
	
})