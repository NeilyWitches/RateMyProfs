class Api::SchoolRatingsController < ApplicationController
    def index
        @school = School.includes(:profs, :prof_reviews, :school_ratings, :school_rating_likes).find(params[:schoolId])
        render :index
    end

    def create
        @school_rating = SchoolRating.new(school_rating_params)

        if @school_rating.save
            render :show
        else
            render json: @school_rating.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def school_rating_params
        params.require(:schoolRating).permit(:reputation, :location, :internet, :food, :opportunities, :facilities, :clubs, :social, :happiness, :safety, :comment, :school_id)
    end
end