class Api::SchoolRatingsController < ApplicationController
    def index
        @school = School.includes(:profs, :prof_reviews, :school_ratings, :school_rating_likes).find(params[:schoolId])
        render :index
    end
end