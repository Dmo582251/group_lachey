App.Views.Projects = Backbone.View.extend({
	el: '',
	initialize: function(){
		console.log("New Collection Project View Created");
		this.listenTo(this.collection, 'reset', this.renderAllItems);
		this.listenTo(this.collection, 'add', this.renderItem);
	},
	renderAllItems: function(){
		this.collection.reversed().each(this.renderItem, this);
	},
	renderItem: function(model){
		var newProjectView = new App.Views.Project({model : model});
		this.$el.append(newProjectView.el);
	}
})
