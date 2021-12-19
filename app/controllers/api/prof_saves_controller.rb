class Api::ProfSavesController < ApplicationController
    
    def create
        @prof_save = ProfSave.new(prof_save_params)

        if @prof_save.save
            render :show
        else
            render json: @prof_save.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def prof_save_params
        params.require(:profSave).permit(:saver_id, :prof_saved_id)
    end
end