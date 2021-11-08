json.extract! @user, :id, :email, :first_name, :last_name, :grad_yr, :school_id, :prof_id

if @user.prof_reviews.length != 0
    json.prof_reviews do
        @user.prof_reviews.each do |prof_review|
            json.set! prof_review.id do
                json.extract! prof_review, :id, :body, :klass, :grade, :quality, :difficulty, :prof_id, :author_id
            end
        end
    end
else
    json.prof_reviews ({})
end