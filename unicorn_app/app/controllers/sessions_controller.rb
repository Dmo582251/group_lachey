class SessionsController < ApplicationController

    def create
        #find user by specific username
        user = User.find_by(username: params[:username])
         if user && user.authenticate(params[:password])
            #if user exists and you find password, they are allowed in
            session[:current_user_id] = user.id
        end
        render json: user
    end

    def destroy
        session[:current_user_id] = nil
        redirect_to root_path
    end
end