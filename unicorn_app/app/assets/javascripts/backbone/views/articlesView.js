App.Views.Article = Backbone.View.extend({
	initialize: function () {
		console.log('created article view');
		this.template = HandlebarsTemplates['article'];
		this.dataScrape();

	},
	article: function (data) {
		console.log(data)
	this.$el.html(this.template(data));
	this.$el.appendTo('#side-box');
	},
	dataScrape: function () {
		var self = this;
		$.get('/tech-crunch-data', function(data) {
			self.article(data);
		});
	}
})