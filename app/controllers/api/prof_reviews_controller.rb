class Api::ProfReviewsController < ApplicationController
    before_action :set_prof_review, only: [:update, :destroy, :show]

    def show
    end

    def index
        @prof = Prof.includes(:prof_reviews, :likes).find(params[:profId])
        @prof_save = Prof.find_by({})
    end
    
    def create
        @prof_review = ProfReview.new(prof_review_params)

        if @prof_review.save
            render :show
        else
            render json: @prof_review.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        if @prof_review.update(prof_review_params)
            render :show
        else
            render json: @prof_review.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @prof_review.destroy
        head :no_content
    end

    private

    def set_prof_review
        @prof_review = ProfReview.find(params[:id])
    rescue
        render json: ['Prof Review not found'], status: :not_found
    end

    def prof_review_params
        params.require(:profReview).permit(:body, :klass, :grade, :quality, 
        :difficulty, :take_again, :for_credit, :txt_book, :attendance, :tag1, 
        :tag2, :tag3, :prof_id, :author_id, :id, :updated_at)
    end
end