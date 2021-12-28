class Api::SchoolRatingsController < ApplicationController
    def index
        @school = School.includes(:profs, :prof_reviews, :school_ratings).find(params[:schoolId])
        render :index
    end
end