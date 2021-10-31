@prof_reviews.each do |prof_review|
  json.set! prof_review.id do
    json.partial! 'prof_review', profReviw: prof_review
  end
end