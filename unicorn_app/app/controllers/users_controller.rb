class UsersController < ApplicationController

    #youre allowed to create yourself thats it if youre not signed in
    before_action :authenticate, except: [:new, :create]

    def new
        @user = User.new
        render json: @user
    end


    def create
        @user = User.new(user_params)

        if @user.save 
            session[:current_user_id] = @user.id
            render json: @user
        else 
            p @user.errors.full_messages
            render json: @user.errors, status: :unprocessable_entity #uses 422 for the status code - http://guides.rubyonrails.org/layouts_and_rendering.html
        end
    end


    def show
        @user = User.find(parms[:id])
    end


    def destroy
        @user = User.find(params[:id])
        session[:current_user_id] = nil
        @user.destroy
    end


    private

    def user_params 
        params.require(:user).permit(:username, :password, :password_confirmation, :first_name, :last_name, :email, :img_url, :bio, :education, :technology, :location)
    end
end