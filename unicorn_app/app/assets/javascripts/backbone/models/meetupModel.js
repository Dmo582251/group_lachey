App.Models.Meetup = Backbone.Model.extend({
	urlRoot: '/meetups/display',
	initialize: function() {
		console.log('new meetup model created')
	}
});