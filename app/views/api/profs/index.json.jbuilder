if @profs.length != 0
    json.profs do
        @profs.each do |prof|
            json.set! prof.id do
                json.extract! prof, :id, :first_name, :last_name, :subject
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
                    json.updatedOn prof_review.updated_at.strftime("%a, %d %b %Y")
                end
            end
        end
    end
else
    json.prof_reviews ({})
end