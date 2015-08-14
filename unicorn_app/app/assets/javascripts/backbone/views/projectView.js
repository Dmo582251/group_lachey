App.Views.Project = Backbone.View.extend({
    className: 'one-project',
    tagName: 'div',
    initialize: function(){
        console.log("New Project View Created");
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
        this.template = HandlebarsTemplates['item'];
        this.render();
    },
    render: function(){
        var modelData = this.model.toJSON();
        var compliledTemplate = this.template(modelData);
        this.$el.html(compliledTemplate);
    },
    events: {
        'click .delete': 'deleteItem'
    },
    deleteItem : function(){
        this.model.destroy();
    }
});