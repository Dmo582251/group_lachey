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
    events: {
        'click .delete': 'deleteItem'
    },
    deleteItem : function(){
        this.model.destroy();
    }
});