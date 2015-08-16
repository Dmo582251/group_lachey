App.Views.Signup = Backbone.View.extend({
	id: 'signup',
	initialize: function () {
		console.log('created view for signup');
		this.template = HandlebarsTemplates['signup'];
		this.mainPage();
	},
	mainPage: function () {
		this.$el.html(this.template());
		this.$el.appendTo('#main-box');
	}, 
	events: {
		'click #createUser': 'createNewUser'
	}, 
	createNewUser: function  () {
		console.log("clicked");
		App.users.create({
			username: $('#username').val(),
			password: $('#password').val(),
			password_confirmation: $('#password_confirmation').val(),
			first_name: $('#first_name').val(),
			last_name: $('#last_name').val(),
			email: $('#email').val(),
			img_url: $('#img_url').val(),
			bio: $('#bio').val(),
			education: $('#education').val(),
			technology: $('#technology').val(),
			location: $('#location').val()
		});
		
		// make a ajax post to create a user
		// App.users.fetch() to populate your collection with the new user you just created

		// To empty out the inputs after button is clicked
		$('#username').val('');
		$('#password').val('');
		$('#password_confirmation').val('');
		$('#first_name').val('');
		$('#last_name').val('');
	 	$('#email').val('');
		$('#img_url').val(''); 
		$('#bio').val('');
		$('#education').val('');
		$('#technology').val('');
		$('#location').val('');

		$('#main-box').empty();
		$('#side-box').empty();


		App.mettupView = new App.Views.Meetup();
		App.articleView = new App.Views.Article();
	}
});



