module Api
    module V1
      class ImagesController < ApplicationController
        protect_from_forgery with: :null_session
        def index
          p current_user
          p session[:user_id]
          images = Image.all
          render json: ImageSerializer.new(images).serialized_json
        end

        def create
            image = Image.new(image_params)
            if image.save
              render json: ImageSerializer.new(image).serialized_json
            else
              render json: { error: image.errors.messages }, status: 422
            end
        end

        def destroy
            image = Image.find_by(id: params[:id])
            if image
              image.destroy
              render json: { message: "Image Successfully Deleted" }, status: 200
            else
              render json: { errors: "ID not found" }, status: 404
            end
        end

        def show
            image = Image.find_by(id: params[:id])
            if image
              render json: ImageSerializer.new(image).serialized_json
            else
              render json: { errors: "ID not found" }, status: 404
            end
        end

        def update
          image = Image.find_by(id: params[:id])
          
          if image
            image.update(image_params)
            render json: { message: "Image Successfully Updated"}, status: 200
          else
            render json: { errors: "ID not found" }, status: 404
          end
      end

        private

        def image_params
            params.require(:image).permit(:name, :description, :image_url)
        end
      end
    end
  end