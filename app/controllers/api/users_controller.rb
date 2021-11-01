class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json: ['Invalid email / password'], status: 401
        else
            login!(@user)
            render 'api/p';
        end
    end

    def destroy
        logout!
        render json: { message: 'Logout sucessful.' }
    end
end