App.Views.Conversation = Backbone.View.extend({
	el:"#main-box",
	initialize: function(){
		console.log('conversation view created');
	},
	render: function(){
		var conversationData = this.model.toJSON();
	}
});