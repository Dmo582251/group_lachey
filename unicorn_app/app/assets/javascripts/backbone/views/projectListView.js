App.Views.Projects = Backbone.View.extend({
    el: '#main-box',
    initialize: function(){
        console.log("New Collection Project View Created");
        this.listenTo(this.collection, 'change', this.renderAllProjects);
        this.listenTo(this.collection, 'add', this.renderProject);
    },
    renderAllItems: function(){
        this.collection.each(this.renderProject, this);
    },
    renderProject: function(model){
        console.log('rendering project view');
        var newProjectView = new App.Views.Project({model : model});
        this.$el.append(newProjectView.el);
    }
});