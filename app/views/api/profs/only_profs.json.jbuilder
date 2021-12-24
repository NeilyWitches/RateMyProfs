if @profs.length != 0
    json.profs do
        @profs.each do |prof|
            json.set! prof.id do
                json.extract! prof, :id, :first_name, :last_name, :school_id
            end
        end
    end
else
    json.profs ({})
end