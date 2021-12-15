json.extract! @prof, :id, :first_name, :last_name, :subject
if @prof.prof_reviews.length != 0
    json.prof_reviews do
        @prof.prof_reviews.each do |prof_review|
            json.set! prof_review.id do
                json.extract! prof_review, :id, :body, :klass, :grade, :quality, :difficulty, :take_again, :for_credit, :txt_book, :attendance, :tag1, :tag2, :tag3, :prof_id
                json.updatedOn prof_review.updated_at.strftime("%a, %d %b %Y")
                if prof_review.likes.length != 0
                    json.likes do
                        prof_review.likes.each do |like|
                            json.set! like.id do
                                json.extract! like, :id, :like_type, :liker_id, :review_id, :prof_id
                            end
                        end
                    end
                else
                    json.likes ({})
                end
            end
        end
    end
else
    json.prof_reviews ({})
end
