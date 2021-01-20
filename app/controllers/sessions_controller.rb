class SessionsController < ApplicationController

    def new
    end
  
    def create
        user = User.find_by_email(params[:email])
        # If the user exists AND the password entered is correct.
        if user && user.authenticate(params[:password])
          # Save the user id inside the browser cookie. This is how we keep the user 
          # logged in when they navigate around our website.
          session[:user_id] = user.id
          p current_user
          render json: { message: "User Successfully Logged in" }, status: 200
        else
        # If user's login doesn't work, send them back to the login form.
            render json: { message: "Error in Logging in" }, status: 404
        end
      end
    
      def destroy
        session.delete(:user_id)
        render json: { message: "User Successfully Logged Out" }, status: 200
      end
  
  end
  