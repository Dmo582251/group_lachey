App.Views.NewConversation = Backbone.View.extend({
	el: '#side-box',
	initialize: function(){
		console.log("new conversation view created");
    this.listenTo(this.model, 'change', this.render);
	},
	events: {
		'click #submit_new_conversation': 'submitConversation'
	},
  submitConversation: function(){
    console.log("new convo form button submitted")
    // var newMessage = App.messagesCollection.create({
    //     content: $('#message-content').val(),
    //     user_id: $('#message-user_id').val()
    // });
    var newConvo = App.conversationsCollection.create({
    	title: $("#conv-title").val(),
      message:{
      content: $('#message-content').val(),
      user_id: $('#message-user_id').val()
      }
    });
    this.$el.empty();
    this.$el.html('Message Submitted')
    // setTimeout(this.$el.empty(), 50000);
  }
})