class Api::UsersController < ApplicationController
    def create
        # debugger
        errors = [];
        # debugger
        errors << "School cannot be blank" if user_params[:school_name] == ""
        # debugger
        errors << "Name cannot be blank" if user_params[:user_name] == ""
        # debugger
        errors << "Email cannot be blank" if user_params[:email] == ""
        # debugger
        errors << "Email does not match" if user_params[:email] != user_params[:email_confirm]
        # debugger
        errors << "Password must be a minimum of 6 characters" if user_params[:password].length < 6
        # debugger
        errors << "Password does not match" if user_params[:password_confirm] != user_params[:password]
        # debugger
        errors << 'An account with this email already already exists.' if User.find_by({email: user_params[:email]})

        names = user_params[:user_name].split()
        # debugger
        first_name = names[0]
        # debugger
        last_name = names[1]
        # debugger

        school = School.find_by(name: user_params[:school_name])
        # debugger

        errors << "School not found." if !school
        # debugger

        if errors.length == 0
            # debugger
            if user_params[:signingInAsProf] == "false"
                # debugger
                @user = User.new({email: user_params[:email], first_name: first_name, school_id: school.id})
                # debugger
                @user.password=(user_params[:password])
                # debugger
                @user.save
                # debugger
                login!(@user)
                # debugger
                render 'api/sessions/show'
                # debugger
            elsif user_params[:signingInAsProf] == "true"
                # debugger
                errors << "Must include last name" if !last_name
                # debugger
                prof = Prof.find_by({first_name: first_name, last_name: last_name, school_id: school.id})
                # debugger
                errors << "Prof not found" if !prof
                # debugger
                errors << "This prof already has an account with Rate My Profs." if User.find_by({prof_id: prof.id})
                # debugger
                if errors.length == 0
                    # debugger
                    @user = User.new({email: user_params[:email], first_name: first_name, school_id: school.id, prof_id: prof.id})
                    # debugger
                    @user.password=(user_params[:password])
                    # debugger
                    @user.save
                    # debugger
                    login!(@user)
                    # debugger
                    render 'api/sessions/show'
                    # debugger
                else
                    # debugger
                    render json: errors, status: 401
                    # debugger
                end
            end
        else
            # debugger
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
            @user = User.find(user_params[:id])
            school = School.find_by(name: user_params[:schoolName])
            errors << 'Name cannot be blank' if user_params[:first_name] == ""
            errors << 'School not found' if !school
            if errors.length == 0
                @user = User.update(user_params[:id], first_name: user_params[:first_name], school_id: school.id)
                render 'api/sessions/show'
            else
                render json: errors, status: 401
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
        user = selected_user
        @prof_reviews = user.prof_reviews
        @profs = user.profs_written_about
        @schools = user.schools_of_profs_written_about
    end

    def index
        user = User.find(params[:userId])
        @profs = user.profs_saved.includes(:prof_reviews)
        @schools = user.schools_of_profs_saved
        render 'api/profs/index'
    end

    private

    def selected_user
        User.includes(:prof_reviews, :profs_written_about, :schools_of_profs_written_about).find(params[:id])
    end

    def user_params
        params.require(:user).permit(:id, :email, :first_name, :password, :newPassword, :oldPassword, :updatingEmail, :updatingPassword, :email_confirm, :password_confirm, :updatingProfile, :school_id, :schoolName, :school_name, :signingInAsProf, :user_name)
    end
end