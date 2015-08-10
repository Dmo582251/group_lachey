class UsersController < ApplicationController

 #youre allowed to create yourself thats it if youre not signed in
before_action :authenticate, except: [:new, :create]

def new
    @user = User.new
end


def create
    @user = User.new(user_params)
    if @user.save 
        session[:current_user_id] = @user.current_user_id
        redirect_to artists_path
    else
        #if I try to make a user and it doesn't work
        redirect_to root_path
    end
end


def show
    @user = User.find(parms[:id])
end


def destroy
    @user = User.find(params[:id])
    session[:current_user_id] = nil
    @user.destroy
    redirect_to root_path
end


private

 def user_params
     params.require(:user).permit(:username, :password)
end


end