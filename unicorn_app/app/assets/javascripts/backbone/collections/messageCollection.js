App.Collections.Messages = Backbone.Collection.extend({
	url: '/messages',
	model: App.Models.Message,
	initialize: function(){
		console.log('New Messages Collection Created');
	}
});