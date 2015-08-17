class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
    protect_from_forgery with: :exception

    before_filter :set_gon

 	def index
		render layout: 'application', text: '' 
  	end

  	helper_method :current_user

  	private

  	def require_user
  		return if current_user

  		respond_to do |person|
  			person.all { render :text => 'unauthorized', :status => :unauthorized }
  		end
  	end

	
	def current_user
	     return @current_user if @current_user

	     if session[:user_id]
	     	@current_user = User.find(session[:user_id])
	     elsif (header = request.headers['Authorized'].to_s.sub('Basic ', '')) != ''
	     	header = Base64.decode64(header).split(':')
	     	username = header.shift
	     	password = header.join(':')
	     	@current_user = User.authenticate(username, password)
	     end
	     	
	end

	def create_user_session(user)
		session[:user_id] = user.id
	end

	def destroy_user_session
		session[:user_id] = nil
	end


	protected

	def set_gon
		gon.my_session_variable = session[:user_id]
	end
	
end







