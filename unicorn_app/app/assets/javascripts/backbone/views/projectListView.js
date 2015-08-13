App.Views.Projects = Backbone.View.extend({
    el: '#main-box',
    initialize: function(){
        console.log("New Collection Project View Created");
        this.listenTo(this.collection, 'change', this.renderAllProjects);
        this.listenTo(this.collection, 'add', this.renderProject);
        this.firstTime = true;
        // this.renderAllProjects();
    },
    renderAllProjects: function(){
        this.$el.children()[1].innerHTML = '';
        this.collection.each(this.renderProject, this);
        if(this.firstTime) {
            this.makeCreateButton();
            this.firstTime = false;
        }
    },
    renderAllItems: function(){
        this.collection.each(this.renderProject, this);
    },
    renderProject: function(model){
        console.log('rendering project view');
        var newProjectView = new App.Views.Project({model : model});
        this.$el.children()[1].appendChild(newProjectView.el);
    },
    makeCreateButton: function() {
        var button = $("<button>").text("Create");
        button.attr('id', 'create_project_form');
        this.$el.append(button);
    },
    events: {
        'click #projects_button': 'renderAllProjects',
        'click #create_project_form': 'makeProjectForm'
    },
    makeProjectForm: function(){
        var project_form_template = HandlebarsTemplates['projectForm'];
        var compiledTemplate = project_form_template();
        $('#side-box').html(compiledTemplate);
    }
});