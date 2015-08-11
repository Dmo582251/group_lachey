App.Collections.Projects = Backbone.Collection.extend({
	url: '/projects',
	model: App.Models.Project,
	initialize: function(){
		console.log("New Projects Collection Created");
	},
	reversed: function(){
		var models = this.models.slice().reverse();
		var collection = new Backbone.Collection;
		collection.reset(models);
		return collection;
	}
})