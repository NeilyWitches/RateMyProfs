json.profs do
    json.extract! @prof, :id, :first_name, :last_name, :subject
end

if @prof.prof_reviews.length != 0
    json.prof_reviews do
        @prof.prof_reviews.each do |prof_review|
            json.set! prof_review.id do
                json.extract! prof_review, :id, :body, :klass, :grade, :quality, :difficulty, :take_again, :for_credit, :txt_book, :attendance, :prof_id
            end
        end
    end
else
    json.prof_reviews ({})
end