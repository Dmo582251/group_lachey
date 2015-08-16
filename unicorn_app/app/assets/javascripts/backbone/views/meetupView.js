App.Views.Meetup = Backbone.View.extend({

	initialize: function () {
		console.log("home view created");
		this.template = HandlebarsTemplates['meetUp'];
		this.meetUp();
	},
	meetUp: function () {
		this.$el.html(this.template());
		this.$el.appendTo('#main-box');
		$('#home_button').show();
		$('.logout').show();
	},
	events : {
		'click .logout': 'signOut'
	},
	signOut: function () {
		console.log('ready to get outta here');
		$.ajax({
			url: '/sessions',
			type: 'DELETE',
			success: function () {
				console.log('session was deleted')
				$('#main-box').empty();
				$('#side-box').empty();
				var template1 = HandlebarsTemplates['signup']
				var template2 = HandlebarsTemplates['login']
				$('#main-box').html(template1);
				$('#side-box').html(template2);
			}
		});
	}
})