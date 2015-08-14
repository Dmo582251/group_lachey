App.Views.Meetup = Backbone.View.extend({

	initialize: function () {
		console.log("home view created");
		this.template = HandlebarsTemplates['meetUp'];
		this.meetUp();
	},
	meetUp: function () {
		this.$el.html(this.template());
		this.$el.appendTo('#main-box');
	}
})