class Api::UsersController < ApplicationController
    def create
        @user = User.new({email: user_params[:email], first_name: user_params[:first_name], password: user_params[:password]})
        passwords_match = user_params[:password] == user_params[:password_confirm]
        emails_match = (user_params[:email] == user_params[:email_confirm])
        if passwords_match && emails_match && @user.save
            login!(@user)
            render 'api/sessions/show'
        else
            errors = @user.errors.full_messages
            errors.push('Password does not match') if !passwords_match
            errors.push('Email does not match') if !emails_match
            render json: errors, status: 401
        end
    end

    def update
        errors = []
        if user_params[:updatingEmail]
            @user = User.find(user_params[:id])
            errors << 'Email cannot be blank' if user_params[:email] == ""
            errors << 'Incorrect password' if !@user.is_password?(user_params[:password])
            if errors.length == 0
                @user = User.update(user_params[:id], :email => user_params[:email])
                render 'api/sessions/show'
            else
                render json: errors, status: 401
            end
        elsif user_params[:updatingPassword]
            @user = User.find(user_params[:id])
            errors << 'Password is too short, must be at least 6 characters' if user_params[:newPassword].length < 6
            errors << 'Incorrect passowrd' if !@user.is_password?(user_params[:oldPassword])
            if errors.length == 0
                @user = User.update(user_params[:id], :password => user_params[:newPassword])
                render 'api/sessions/show'
            else
                render json: errors, status: 401
            end
        elsif user_params[:updatingProfile]
            # debugger
            @user = User.find(user_params[:id])
            # debugger
            school = School.find_by(name: user_params[:schoolName])
            # debugger
            errors << 'Name cannot be blank' if user_params[:first_name] === ""
            # debugger
            errors << 'School not found' if !school
            # debugger
            if errors.length == 0
                # debugger
                @user = User.update(user_params[:id], first_name: user_params[:first_name], school_id: school.id)
                # debugger
                render 'api/sessions/show'
                # debugger
            else
                # debugger
                render json: errors, status: 401
                # debugger
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
        params.require(:user).permit(:id, :email, :first_name, :password, :newPassword, :oldPassword, :updatingEmail, :updatingPassword, :email_confirm, :password_confirm, :updatingProfile, :school_id, :schoolName)
    end
end