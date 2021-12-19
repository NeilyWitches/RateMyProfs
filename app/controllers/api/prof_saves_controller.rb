class Api::ProfSavesController < ApplicationController
    before_action :set_prof_save, only: [:destroy]
    
    def create
        @prof_save = ProfSave.new(prof_save_params)

        if @prof_save.save
            render :show
        else
            render json: @prof_save.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @prof_save.destroy
        head :no_content
    end

    private

    def set_prof_save
        @prof_save = ProfSave.find(params[:id])
    rescue
        render json: ['ProfSave not found'], status: :not_found
    end

    def prof_save_params
        params.require(:profSave).permit(:saver_id, :prof_saved_id)
    end
end