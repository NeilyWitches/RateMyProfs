json.schools do
    json.set! @school.id do
        json.extract! @school, :id, :name, :state, :city, :website
    end
end

if @school.profs.length != 0
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

if @school.prof_reviews.length != 0
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

if @school.school_ratings.length != 0
    json.school_ratings do
        @school.school_ratings.each do |school_rating|
            json.set! school_rating.id do
                json.extract! school_rating, :reputation, :location, :internet, :food, :opportunities, :facilities, :clubs, :social, :happiness, :safety, :comment, :school_id, :id
                json.updatedOn school_rating.updated_at.strftime("%a, %d %b %Y")
            end
        end
    end
else
    json.school_ratings ({})
end

if @school.school_rating_likes.length != 0
    json.school_rating_likes do
        @school.school_rating_likes.each do |school_rating_like|
            json.set! school_rating_like.id do
                json.extract! school_rating_like, :id, :like_type, :liker_id, :school_rating_id
            end
        end
    end
else
    json.school_rating_likes ({})
end