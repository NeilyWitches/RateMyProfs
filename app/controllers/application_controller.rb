# class ApplicationController < ActionController::Base
#     #protect_from_forgery with: :exception
#     #protect_from_forgery with: :null_session
#     skip_before_action :verify_authenticity_token

#     helper_method :current_user, :logged_in?

#     def current_user
#         @current_user ||= User.find_by(session_token: session[:session_token])
#     end

#     def ensure_logged_in
#         redirect_to new_session_url unless logged_in?
#     end

#     def logged_in?
#         !!current_user
#     end

#     def login!(user)
#         @current_user = user
#         session[:session_token] = @current_user.session_token
#     end

#     def logout!
#         session[:session_token] = nil
#         @current_user.reset_session_token!
#     end
# end

class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    helper_method :current_user, :logged_in?

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def require_logged_in
        redirect_to new_session_url unless logged_in?
    end

    def logged_in?
        !current_user.nil?
    end

    def login!(user)
        session[:session_token] = user.session_token
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def require_logged_out
        redirect_to user_url(current_user) if logged_in?
    end
end