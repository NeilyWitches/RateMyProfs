if @profs.length != 0
    json.profs do
        @profs.each do |prof|
            json.set! prof.id do
                json.extract! prof, :id, :first_name, :last_name, :subject, :school_id
            end
        end
    end
else
    json.profs ({})
end

if @profs.length != 0 && @profs.any?{|prof| prof.prof_reviews.length != 0}
    json.prof_reviews do
        @profs.each do |prof|
            prof.prof_reviews.each do |prof_review|
                json.set! prof_review.id do
                    json.extract! prof_review, :id, :quality, :difficulty, :take_again, :prof_id
                end
            end
        end
    end
else
    json.prof_reviews ({})
end

if @schools.length != 0
    json.schools do
        @schools.each do |school|
            json.set! school.id do
                json.extract! school, :id, :name
            end
        end
    end
else
    json.schools ({})
end