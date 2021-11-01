class SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json: ['Invalid credentials'], status: 401
        else
            login!(@user)
            'api/users/show';
        end
    end

    def destroy
        logout!
        render json: { message: 'Logout successful.' }
    end
end