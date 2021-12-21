class Api::SchoolsController < ApplicationController
    def create
        @school = School.new(school_params)
        if @school.save
            render 'api/schools/one'
        else
            render json: @school.errors.full_messages, status: :unprocessable_entity
        end
    end

    def index
        @schools = School.all
        render :index
    end

    private

    def school_params
        params.require(:school).permit(:name, :state, :city, :website)
    end
end