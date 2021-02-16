class SessionsController < ApplicationController
    skip_before_action :authenticate_request

    def new
    end
  
    def create
        user = User.find_by_email(params[:email])
        # If the user exists AND the password entered is correct.
        command = AuthenticateUser.call(params[:email], params[:password])

        if command.success?
          render json: { auth_token: command.result }
        else
          render json: { error: command.errors }, status: :unauthorized
        end
      end
  
  end
  