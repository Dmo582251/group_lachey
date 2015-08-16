App.Views.Logger = Backbone.View.extend({
	initialize: function () {
		console.log('created a signup and login view');
		$.ajax({
			url: '/sessions/new',
			type: 'GET',
			success: function (data) {
				if (data) {
					$.ajax({
						type: 'GET',
						url: '/users/' + data,
						success: function(data) {
							console.log(data + ' its working');
							var template = HandlebarsTemplates['logger'];
							$('#main-box').html(template(data));

						}
					});
				}
				else {
					var template = HandlebarsTemplates['logger']
					$('#main-box').html(template);
				}
			}
		});
	},
	events: {
		'click .logout': 'signOut',
		'click #user': 'userProfile'
	},
	signOut: function () {
		console.log('ready to get outta here');
		$.ajax({
			url: '/sessions',
			type: 'DELETE',
			success: function () {
				console.log('session was deleted')
				var template = HandlebarsTemplates['logger']
				$('#main-box').html(template);
			}
		});
	},
	userProfile: function () {
		console.log('welcome in user');
		$.ajax({
			url: '/sessions/new',
			type: 'GET',
			success: function (data) {
				if (data) {
					$.ajax({
						type: 'GET',
						url: '/users/' + data,
						success: function () {
							console.log(data);
							var template = HandlebarsTemplates['logger'];
						}
					});
				}
			}
		});
	}
});














