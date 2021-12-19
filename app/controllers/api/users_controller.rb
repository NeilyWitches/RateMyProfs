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
        if user_params[:updatingEmail]
            @user = User.find(user_params[:id])
            if @user.is_password?(user_params[:password])
                @user = User.update(user_params[:id], :email => user_params[:email])
                render 'api/sessions/show'
            elsif !@user
                render json: ['Could not locate user'], status: 400
            else
                render json: ['Invalid password'], status: 401
            end
        elsif user_params[:updatingPassword]
            @user = User.find(user_params[:id])
            if @user.is_password?(user_params[:oldPassword])
                @user = User.update(user_params[:id], :password => user_params[:newPassword])
                render 'api/sessions/show'
            elsif !@user
                render json: ['Could not locate user'], status: 400
            else
                render json: ['The old password was incorrect'], status: 401
            end
        end
    end

    def destroy
        @user = User.find(user_params[:id])
        if @user.is_password?(user_params[:password])
            @user.destroy
            head :no_content
        elsif !@user
            render json: ['Could not locate user'], status: 400
        else
            render json: ['Invalid password'], status: 401
        end
    else
        
    end

    def show
        @user = selected_user
    end

    def index
        user = User.find(params[:userId])
        @profs = user.profs_saved.includes(:prof_reviews)
        render 'api/profs/index'
    end

    private

    def selected_user
        User.includes(:prof_reviews).find(params[:id])
    end

    def user_params
        params.require(:user).permit(:id, :email, :first_name, :last_name, :password, :newPassword, :oldPassword, :updatingEmail, :updatingPassword)
    end
end