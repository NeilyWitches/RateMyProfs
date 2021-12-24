class Api::ProfsController < ApplicationController
    before_action :set_prof, only: [:show]

    def index
        if params[:onlyProfs]
            @profs = Prof.all
            render 'api/profs/only_profs'
        else
            @profs = Prof.includes(:prof_reviews).all
            @schools = School.all
        end
    end

    def show
    end

    def update
        errors = []
        school = School.find_by(name: prof_params[:school_name])
        errors << 'School not found' if !school
        errors << 'First name cannot be blank' if prof_params[:first_name] == ""
        errors << 'Last name cannot be blank' if prof_params[:last_name] == ""
        errors << 'Department cannot be blank' if prof_params[:subject] == ""

        if errors.length == 0
            @prof = Prof.update(prof_params[:id], first_name: prof_params[:first_name], last_name: prof_params[:last_name], subject: prof_params[:subject], school_id: school.id)
            render :show
        else
            render json: errors, status: :unprocessable_entity
        end
    end

    def create
        errors = []
        school = School.find_by(name: prof_params[:school_name])
        errors << 'School not found' if !school
        errors << 'First name cannot be blank' if prof_params[:first_name] == ""
        errors << 'Last name cannot be blank' if prof_params[:last_name] == ""
        errors << 'Department cannot be blank' if prof_params[:subject] == ""
        if errors.length == 0
            @prof = Prof.create(first_name: prof_params[:first_name], last_name: prof_params[:last_name], subject: prof_params[:subject], school_id: school.id)
            render :show
        else
            render json: errors, status: :unprocessable_entity
        end
    end

    private

    def set_prof
        @prof = Prof.find(params[:id])
    rescue
        render json: ['Prof not found'], status: :not_found
    end

    def prof_params
        params.require(:prof).permit(:first_name, :last_name, :subject, :school_name, :id)
    end
end