App.Views.Conversation = Backbone.View.extend({
	el: "#main-box",
	initialize: function(){
		console.log('conversation view created');
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
		// this.template = HandlebarsTemplates['conversation'];		
	},
	events: {
		'click #conversation': 'render',
		'click .close-message': 'returnToRoot',
		'click #create_message_form': 'createConversation'
		// this.render()
	},
	returnToRoot: function(){
		$('#main-content').empty();
	},
	createConversation: function(){
		var messageForm = HandlebarsTemplates['conversationForm'];
		var compiledMessageTemplate = messageForm();
		$('#side-box').empty();
		$('#side-box').append(compiledMessageTemplate);
	},
	makeCreateButton: function() {
        var button = $("<button>").text("Create Message");
        button.attr('id', 'create_message_form');
       	$('#main-content').append(button);
    },
	
    render: function(){
    	$('#map').css('display','none');
        $('#article-box').css('display','none');
        $('#main-content').empty();
        $('#side-box').empty();
		console.log('convo render function works');
		
    	$.get('/conversations/2', function (convoJSON) {
        console.log(convoJSON);
        convoData = convoJSON;
        console.log(convoData);

        data ={
        	convo : convoData.conversation,
        	mess  : convoData.messages	
        }
        console.log(data.convo)
        console.log(data.mess)
        var conversationTemplate = HandlebarsTemplates['conversation'];
		var compiledConvoTemplate =conversationTemplate(data)
		console.log(data);
		$('#main-content').append(compiledConvoTemplate);
		});
		this.makeCreateButton();
    	
    },
	render2: function(){
		$('#map').css('display','none');
        $('#article-box').css('display','none');
        $('#main-content').empty();
        $('#side-box').empty();
        $('#create_project_form').hide();
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
		$('#main-content').append(compiledConvoTemplate);
		this.makeCreateButton();

		// this.$el.html(conversationTemplate);
	}
});