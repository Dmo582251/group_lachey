App.Collections.Conversations = Backbone.Collection.extend({
	url: '/conversations',
	model: App.Models.Conversation,
	initialize: function(){
		console.log('New Conversation Collection Created');
	}
});
