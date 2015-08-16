class MessagesController < ApplicationController

def new
	@message = Message.new
	
end

def show
	@message = Message.find(params[:id])
	render json: @message
end

def index
	@messages = Message.all
	render json: @messages
	
end

def create
	@message = Message.create(message_params)
	render json: @message
	
	
end


end