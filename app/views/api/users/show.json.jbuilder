if @prof_reviews.length != 0
    json.prof_reviews do
        @prof_reviews.each do |prof_review|
            json.set! prof_review.id do
                json.extract! prof_review, :id, :body, :quality, :difficulty, :klass, :grade, :tag1, :tag2, :tag3, :take_again, :for_credit, :txt_book, :attendance, :author_id, :prof_id
                json.updatedOn prof_review.updated_at.strftime("%a, %d %b %Y")
            end
        end
    end
else
    json.prof_reviews ({})
end

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