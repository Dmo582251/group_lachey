App.Views.Main = Backbone.View.extend({
	el: '.navbar',
	events: {'click #home-button': 'renderHome'},
	initialize: function(){
		console.log('main view loaded');
	},
	renderHome: function(){
		console.log('home button clicked');
		//clear divs
		$('#side-box').empty();
		$('#main-content').empty();
		$('#create_project_form').hide();
		
		App.meettupView = new App.Views.MeetupList();
		$('#meetup-container').css('display','block');
		// App.map = new App.Views.Map();
		$('#map').css('display','block');
		$('#article-box').empty();
		App.articleView = new App.Views.Article();
		$('#article-box').css('display', 'block');

	}
})