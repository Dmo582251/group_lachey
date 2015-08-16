App.Collections.Users = Backbone.Collection.extend({
	urlRoot: '/sessions',
	model: App.Models.User,
	initialize: function () {
		console.log("created new collection user");
	},
	fetchById: function (id) {
		this.fetch({
			url: this.url + '/' + id,
			reset: false,
			success: function(collect, data) {
				App.model.set(data);
			}
		});
	}
});