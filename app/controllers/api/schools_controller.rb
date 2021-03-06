class Api::SchoolsController < ApplicationController
    before_action :set_school, only: [:show]

    def create
        @school = School.new(school_params)
        if @school.save
            render :show
        else
            render json: @school.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
    end

    def index
        if !params[:schoolQuery]
            @schools = School.all
            render :index
        else
            @schools = School.includes(:school_ratings).where("lower(name) like ?", "%" + params[:schoolQuery].downcase() + "%")
            render 'api/schools/search'
        end
    end

    private

    def set_school
        @school = School.find(params[:schoolId])
    rescue
        render json: ['School not found'], status: :not_found
    end

    def school_params
        params.require(:school).permit(:name, :state, :city, :website)
    end
end