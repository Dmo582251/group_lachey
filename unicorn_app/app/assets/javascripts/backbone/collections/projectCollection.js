App.Collections.Projects = Backbone.Collection.extend({
    url: '/projects',
    model: App.Models.Project,
    initialize: function(){
        console.log("New Projects Collection Created");
    }
    
});