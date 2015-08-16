App.Collections.Users = Backbone.Collection.extend({
	url: '/users',
	model: App.Models.User,
	initialize: function () {
		console.log("created new collection user");
	}
})