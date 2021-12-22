json.schools do
    json.set! @school.id do
        json.extract! @school, :id, :name, :state, :city, :website
    end
end