App.Views.NewProject = Backbone.View.extend({
	el: '#side-box',
	initialize: function(){
		console.log("new NEWWWW project view created");
	},
	events: {
		'click #create_new_project': 'commitNewProject'
	},
  commitNewProject: function(){
    console.log("new project form button submitted")
    //takes in info and creates new project
    var newProject = App.projectsCollection.create({
    	title: $("#title").val(),
    	description: $("#description").val(),
    	technology: $("#technology").val()
    });
    $('#project-form').empty();
    //this.$el.html('New Project Created!')
  }
})