App.Models.Conversation = Backbone.Model.extend({
	urlRoot: '/conversations',
	initialize: function() {
		console.log('new conversation model created');
	}
});