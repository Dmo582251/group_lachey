App.Views.Conversation = Backbone.View.extend({
	el: "#main-box",
	initialize: function(){
		console.log('conversation view created');
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
		// this.template = HandlebarsTemplates['conversation'];		
	},
	events: {
		'click .conversation': 'render',
		'click .close-message': 'returnToRoot',
		'click #create_message_form': 'createConversation'
		// this.render()
	},
	returnToRoot: function(){
		$('#projects').empty();
	},
	createConversation: function(){
		var messageForm = HandlebarsTemplates['conversationForm'];
		var compiledMessageTemplate = messageForm();
		$('#side-box').append(compiledMessageTemplate);
	},
	makeCreateButton: function() {
        var button = $("<button>").text("Create Message");
        button.attr('id', 'create_message_form');
       	$('#projects').append(button);
    },
	render: function(){
		console.log('convo render function works');
		var conversationData = this.collection.toJSON();
		var messageData = App.messagesCollection.toJSON();
		var data = {
			convo: conversationData,
			mess: messageData
		};
		console.log(conversationData);
		console.log(messageData);
		// var conversationTemplate = this.template(data);	
		var conversationTemplate = HandlebarsTemplates['conversation'];
		var compiledConvoTemplate =conversationTemplate(data)
		$('#projects').append(compiledConvoTemplate);
		this.makeCreateButton();

		// this.$el.html(conversationTemplate);
	}
});