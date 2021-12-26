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

if @schools.length != 0 && @schools.any?{|school| school.school_ratings.length != 0}
    json.school_ratings do
        @schools.each do |school|
            school.school_ratings.each do |school_rating|
                json.set! school_rating.id do
                    json.extract! school_rating, :id, :internet, :facilities, :reputation, :opportunities, :location, :food, :clubs, :social, :happiness, :safety, :school_id
                end
            end
        end
    end
else
    json.school_ratings ({})
end