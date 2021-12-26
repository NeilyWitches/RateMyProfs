class Api::ProfsController < ApplicationController
    before_action :set_prof, only: [:show]

    def index
        if params[:onlyProfs] == 'true'
            @profs = Prof.all
            render 'api/profs/only_profs'
        else
            names = params[:profQuery].split()
            first_name = names[0]
            last_name = names[1]

            if params[:schoolName] == "all schools"
                @schools = School.all.includes(:profs)
                profs_1 = Prof.where("lower(first_name) like ?", "%" + names[0].downcase() + "%").includes(:prof_reviews)
                profs_2 = Prof.where("lower(last_name) like ?", "%" + names[0].downcase() + "%").includes(:prof_reviews)

                if last_name
                    profs_3 = @schools[0].profs.where("lower(first_name) like ?", "%" + names[1].downcase() + "%").includes(:prof_reviews)
                    profs_4 = @schools[0].profs.where("lower(last_name) like ?", "%" + names[1].downcase() + "%").includes(:prof_reviews)

                    @profs = profs_1 + profs_2 + profs_3 + profs_4
                else
                    @profs = profs_1 + profs_2
                end
            else
                @schools = School.where(name: params[:schoolName]).includes(:profs)
                profs_1 = @schools[0].profs.where("lower(first_name) like ?", "%" + names[0].downcase() + "%").includes(:prof_reviews)
                profs_2 = @schools[0].profs.where("lower(last_name) like ?", "%" + names[0].downcase() + "%").includes(:prof_reviews)

                if last_name
                    profs_3 = @schools[0].profs.where("lower(first_name) like ?", "%" + names[1].downcase() + "%").includes(:prof_reviews)
                    profs_4 = @schools[0].profs.where("lower(last_name) like ?", "%" + names[1].downcase() + "%").includes(:prof_reviews)

                    @profs = profs_1 + profs_2 + profs_3 + profs_4
                else
                    @profs = profs_1 + profs_2
                end
            end
            
            render :index
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