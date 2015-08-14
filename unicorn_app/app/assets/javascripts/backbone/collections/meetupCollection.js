App.Collections.MeetupCollection = Backbone.Collection.extend({
	initialize: function(){
		console.log('new meetup collection created');
	// this.fetch();
	},
	url: '/meetups/display'//,
	// fetch: function(){
	// 	fetch({
	// 		url: 'meetups/display'
	// 	});
	// 	console.log('fetch function meetup');
	// }
});