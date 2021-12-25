class Api::SchoolRatingsController < ApplicationController
    def index
        if (!params[:schoolId])
            @school_ratings = SchoolRating.all
            render :index
        end
    end
end