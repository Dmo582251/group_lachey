App.Models.User = Backbone.Model.extend({
	urlRoot: '/users',
	initialize: function () {
		console.log("created new user model");
	}
});