class SessionsController < ApplicationController

    def new
        render json: session[:user_id]
    end

    def create
        #To create a new user with sessions
        @user = User.find_by(username: params[:username])
        # @user.authenticate(params[:username], params[:password])

        #if user exists and you find password, they are allowed in
        if @user && @user.authenticate(params[:password])
            create_user_session(@user) #session[:current_user_id] = @user.id
            render json: @user
        else
            respond_to do |person|
                person.json { render :json => {:error => "Username or Password does not exist."} }
            end
        end
    end

    def destroy
        session[:user_id] = nil
        destroy_user_session
        render json: @user
    end
end