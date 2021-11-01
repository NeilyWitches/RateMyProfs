@prof_reviews.each do |prof_review|
  json.set! prof_review.id do
    json.partial! 'prof_review', profReview: prof_review
  end
end