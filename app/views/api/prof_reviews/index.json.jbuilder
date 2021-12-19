if @prof.prof_reviews.length != 0
    json.prof_reviews do
        @prof.prof_reviews.each do |prof_review|
            json.set! prof_review.id do
                json.extract! prof_review, :id, :body, :quality, :difficulty, :klass, :grade, :tag1, :tag2, :tag3, :take_again, :for_credit, :txt_book, :attendance, :author_id, :prof_id
                json.updatedOn prof_review.updated_at.strftime("%a, %d %b %Y")
            end
        end
    end
else
    json.prof_reviews ({})
end

if @prof.likes.length != 0
    json.likes do
        @prof.likes.each do |like|
            json.set! like.id do
                json.extract! like, :id, :like_type, :liker_id, :review_id
            end
        end
    end
else
    json.likes ({})
end

if @prof_save
    json.prof_saves do
        json.set! @prof_save.id do
            json.extract! @prof_save, :id, :saver_id, :prof_saved_id
        end
    end
else
    json.prof_saves ({})
end