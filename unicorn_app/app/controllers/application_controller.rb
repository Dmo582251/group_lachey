class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  def index
	# @user = User.new
	render layout: 'application', text: '' 
  end

	# This is for user login
	def authenticate
	    redirect_to new_user_path unless session[:current_user_id]
	end
	
	def current_user
	     User.find(session[:current_user_id]) if session[:current_user_id]
	end
end
