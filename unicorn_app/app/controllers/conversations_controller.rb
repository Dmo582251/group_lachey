class ConversationsController < ApplicationController
	
	def index
		@conversations = Conversation.all
		@messages = Message.all
		render json: @conversations
	end

	def show
		@conversation = Conversation.find(params[:id])
		render json: @conversation

	end

	def new
		@conversation = Conversation.new
	end

	def create
		@conversation = Conversation.create(conversation_params)
		# @project.user_id = session[:current_user_id]
		render json: @conversation
	end

	def edit
		@conversation = Conversation.find(params[:id])
		render json: @conversation
	end

	def update
		@conversation = Conversation.find(params[:id])
		@conversation.update(conversation_params)
		render json: @conversation
	end

	def destroy
		@conversation = Conversation.find(params[:id])
		@conversation.destroy
		render json: @conversation
	end

	private

	def conversation_params
		params.require(:conversation).permit(:title, :message_id, :message)
	end

end
