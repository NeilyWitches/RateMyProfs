if @school_ratings != 0
    json.school_ratings do
        @school_ratings.each do |school_rating|
            json.set! school_rating.id do
                json.extract! school_rating, :id, :internet, :facilities, :reputation, :opportunities, :location, :food, :clubs, :social, :happiness, :safety, :school_id
            end
        end
    end
else
    json.school_ratings ({})
end