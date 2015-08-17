App.Views.Signup = Backbone.View.extend({
	id: 'signup',
	initialize: function () {
		console.log('created view for signup');
		this.template = HandlebarsTemplates['signup'];
		this.mainPage();
	},
	mainPage: function () {
		this.$el.html(this.template());
		this.$el.appendTo('#main-content');
	}, 
	events: {
		'click #createUser': 'createNewUser'
	}, 
	createNewUser: function  () {
		console.log("clicked");
		//create new user with required info below
		App.users.create({
			first_name: $('#first_name').val(),
			last_name: $('#last_name').val(),
			email: $('#email').val(),
			img_url: $('#img_url').val(),
			bio: $('#bio').val(),
			education: $('#education').val(),
			technology: $('#technology').val(),
			location: $('#location').val(),
			username: $('#username').val(),
			password: $('#password').val(),
			password_confirmation: $('#password_confirmation').val()
		});
		
	
		var mainData = {
			username: $('#username').val(),
			password: $('#password').val(),
			password_confirmation: $('#password_confirmation').val()
		};
		//To ensure that input values are present before submitting
		if (mainData.username && mainData.password && mainData.password_confirmation) {

			// make a ajax post to create a user
			$.ajax({
				type: 'POST',
				url: '/sessions',
				data: mainData,
				success: function () {
					App.logg = new App.Views.Logger({ collection: App.users });
				}
			});

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

		
		App.meettupView = new App.Views.MeetupList();
		App.articleView = new App.Views.Article();
		$('#user_create').css('display', 'none');
		$('#login').css('display', 'none');
		$('#map').css('display','block');
		$('.navbar .nav').css('display','block');
		$('#meetup-container').css('display','block');
		// $('html').css('background','none');


		}
	}
});



