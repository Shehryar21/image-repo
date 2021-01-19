class ApplicationController < ActionController::Base
 protect_from_forgery with: :null_session

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  helper_method :current_user

  def authorize
    render json: { message: "Unauthorized" }, status: 404 unless current_user
  end
end
