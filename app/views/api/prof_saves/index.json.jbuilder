if @prof_saves.length != 0
    json.prof_saves do
        @prof_saves.each do |prof_save|
            json.set! prof_save.id do
                json.extract! prof_save, :id, :saver_id, :prof_saved_id
            end
        end
    end
else
    json.prof_saves ({})
end