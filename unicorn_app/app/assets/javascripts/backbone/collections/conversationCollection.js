App.Collections.ConversationCollection = Backbone.Collection.extend({
	initialize: function(){
		console.log('New Conversation Collection Created');
	},
	url: '/conversations',
	fetchById: function(id){
		this.fetch({
			url:this.url 
		})
	}



}) 