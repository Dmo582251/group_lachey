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
        $('#main-content').empty();        
        // this.$el.children()[4].innerHTML = '';
        this.collection.each(this.renderProject, this);
        if(this.firstTime) {
            this.makeCreateButton();
            this.firstTime = false;
        }
        $('#create_project_form').show();


    },
    renderAllItems: function(){
        this.collection.each(this.renderProject, this);
    },
    renderProject: function(model){
        // $('#main-box').empty();
        $('#map').css('display','none');
        $('#article-box').css('display','none');
        console.log('rendering project view');
        var newProjectView = new App.Views.Project({model : model});
        // this.$el.children()[4].appendChild(newProjectView.el);
        $('#main-content').append(newProjectView.el)

    },
    makeCreateButton: function() {
        var button = $("<button>").text("Create");
        button.attr('id', 'create_project_form');
        this.$el.append(button);
    },
    events: {
        'click #projects_button': 'renderAllProjects',
        'click #create_project_form': 'makeProjectForm',
        'click #logout': 'signOut',
        'click #profile_button': 'myProfile'
    },
    signOut: function () {
        console.log('ready to get outta here');
        $.ajax({
            url: '/sessions',
            type: 'DELETE',
            dataType: 'json',
            success: function (response) {
                console.log('session was deleted')
                $('#main-content').empty();
                $('.navbar .nav').css('display', 'none');
                $('#side-box').empty();
                $('#map').css('display','none');
                $('#article-box').empty();

                App.signup = new App.Views.Signup();
                App.login = new App.Views.Login();
            }
        });
        console.log("wtf");
    },
    makeProjectForm: function(){
        var project_form_template = HandlebarsTemplates['projectForm'];
        var compiledTemplate = project_form_template();
        $('#side-box').html(compiledTemplate);
        $('#create_project_form').hide();
    },
    myProfile: function () {
        $('#main-content').empty();
        $('#side-box').empty();
        $('#map').css('display','none');
        $('#create_project_form').css('display', 'none');


        var thisProfile = HandlebarsTemplates['profile'];
        var compiledTemplate = thisProfile();
        $('#main-content').html(compiledTemplate);
    }
});