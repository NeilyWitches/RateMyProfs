class Api::ProfsController < ApplicationController
    before_action :set_prof, only: [:show]

    def index
        @profs = Prof.includes(:prof_reviews).all
    end

    def show
    end

    def create
        @prof = Prof.new(prof_params)
        if @prof.save
            @profs = Prof.includes(:prof_reviews).all
            render :index
        else
            render json: @prof.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def set_prof
        @prof = Prof.includes(:prof_reviews, :likes).find(params[:id])
    rescue
        render json: ['Prof not found'], status: :not_found
    end

    def prof_params
        params.require(:prof).permit(:first_name, :last_name, :subject)
    end
end