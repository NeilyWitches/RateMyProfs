class Like < ApplicationRecord
    validates :liker_id, :review_id, :prof_id, presence: true
    validates :liker_id, uniqueness: { scope: :review_id }
    validates :like_type, inclusion: [true, false]

    belongs_to :liker,
        foreign_key: :liker_id,
        class_name: :User

    belongs_to :prof_review,
        foreign_key: :review_id,
        class_name: :ProfReview
end