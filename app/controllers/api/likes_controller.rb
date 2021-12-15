class Api::LikesController < ApplicationController
    before_action :set_like, only: [:destroy, :show]

    def show
    end

    def create
        @like = Like.new(like_params)
        
        if @like.save
            render :show
        else 
            render json: @like.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @like.destroy
        head :no_content
    end

    private

    def set_like
        @like = Like.find(params[:id])
    rescue
        render json: ['Like not found'], status: :not_found
    end

    def like_params
        params.require(:like).permit(:like_type, :liker_id, :review_id, :prof_id)
    end
end