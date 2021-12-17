class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/sessions/show'
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def update
        @user = User.find(user_params[:id])
        if @user.is_password?(user_params[:password]) && @user.update(user_params)
            render 'api/sessions/show'
        elsif !@user
            render json: ['Could not locate user'], status: 400
        else
            render json: ['Invalid password'], status: 401
        end
    end

    def show
        @user = selected_user
    end

    private

    def selected_user
        User.includes(:prof_reviews).find(params[:id])
    end

    def user_params
        params.require(:user).permit(:id, :email, :first_name, :last_name, :password)
    end
end