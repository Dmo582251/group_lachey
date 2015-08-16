class UsersController < ApplicationController

    #youre allowed to create yourself thats it if youre not signed in
    before_action :authenticate, except: [:new, :create]

    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find(parms[:id])
        render json: @user
    end

    def new
        @user = User.new
    end

    def create
        @user = User.new(user_params)
        @user.password = (params[:password])
        if @user.save 
            display[:notice] = 'Account created'
            session[:current_user_id] = @user.id
        end
        render json: @user
    end

    def update
        @user = User.find(params[:id])
        render json: @user
    end


    # def destroy
    #     @user = User.find(params[:id])
    #     session[:current_user_id] = nil
    #     @user.destroy
    # end


    private

    def user_params 
        params.require(:user).permit(:username, :password, :password_confirmation, :first_name, :last_name, :email, :img_url, :bio, :education, :technology, :location)
    end
end