App.Views.User = Backbone.View.extend({
	initialize: function () {
		console.log('new view for user created');
		this.template = HandlebarsTemplates['user'];
		this.render();
	},
	render: function () {
		this.$el.html(this.template(this.model.toJSON()));
	}
});