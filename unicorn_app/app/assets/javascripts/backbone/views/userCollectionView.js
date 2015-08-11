App.Views.User = Backbone.View.extend({
	model: ,
	tagName: 'div',
	initialize: function () {
		console.log('created view for user');
		this.template = HandlebarsTemplates['user'];
	},
	events: {
		'click #userLogin': 'renderHomePage',
		'click #createUser': 'renderHomePage'
	},
	renderHomePage: function () {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	} 

})