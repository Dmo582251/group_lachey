App.Views.Project = Backbone.View.extend({
    className: 'one-project',
    tagName: 'div',
    initialize: function(){
        console.log("New Project View Created");
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
        this.template = HandlebarsTemplates['project'];
        this.render();
    },
    render: function(){
        var modelData = this.model.toJSON();
        var compiledTemplate = this.template(modelData);
        this.$el.html(compiledTemplate);
    },
    //grabs a single project and displays it in side bar div
    singleProjectView: function(){
        var one_project_template = HandlebarsTemplates['oneProject'];
        var modelData = this.model.toJSON();
        var compiledTemplate = one_project_template(modelData);
        $('#side-box').html(compiledTemplate);
    },
    events: {
        'click #view_one_project': 'singleProjectView'
    }
});