json.schools do
    json.set! @school.id do
        json.extract! @school, :id, :name, :state, :city, :website
    end
end

if @school.profs != 0
    json.profs do
        @school.profs.each do |prof|
            json.set! prof.id do
                json.extract! prof, :id, :first_name, :last_name, :school_id
            end
        end
    end
else
    json.profs ({})
end

if @school.prof_reviews != 0
    json.prof_reviews do
        @school.prof_reviews.each do |prof_review|
            json.set! prof_review.id do
                json.extract! prof_review, :id, :quality, :prof_id
            end
        end
    end
else
    json.prof_reviews ({})
end

if @school.school_ratings != 0
    json.school_ratings do
        @school.school_ratings.each do |school_rating|
            json.set! school_rating.id do
                json.extract! school_rating, :reputation, :location, :internet, :food, :opportunities, :facilities, :clubs, :social, :happiness, :safety, :comment, :school_id
                json.updatedOn school_rating.updated_at.strftime("%a, %d %b %Y")
            end
        end
    end
else
    json.school_ratings ({})
end