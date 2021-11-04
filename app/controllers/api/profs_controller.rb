class Api::ProfsController < ApplicationController
    before_action :set_prof, only: [:show, :update, :destroy]

    def index
        @profs = Prof.all
    end

    def show
    end

    def create
        @prof = Prof.new(prof_params)

        if @prof.save!
            render :show
        else
            render json: @prof.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        if @prof.update(prof_params)
            render :show
        else
            render json: @prof.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def set_prof
        @prof = Prof.find(params[:id])
    rescue
        render json: ['Prof not found'], status: :not_found
    end

    def prof_params
        params.require(:prof).permit(:first_name, :last_name, :subject)
    end
end