if @schools.length != 0
    json.schools do
        @schools.each do |school|
            json.set! school.id do
                json.extract! school, :id, :name, :state, :city
            end
        end
    end
else
    json.schools ({})
end