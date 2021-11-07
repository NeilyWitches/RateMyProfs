json.extract! @user, :id, :email, :first_name, :last_name, :grad_yr, :school_id, :prof_id

json.prof_reviews do
    @user.prof_reviews.each do |prof_review|
        json.set! prof_review.id do
            json.extract! prof_review, :id, :klass, :grade, :prof_id, :author_id
        end
    end
end