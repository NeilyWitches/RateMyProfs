class SchoolRatingLike < ApplicationRecord
    validates :liker_id, :school_rating_id, presence: true
    validates :liker_id, uniqueness: { scope: :school_rating_id }
    validates :like_type, inclusion: [true, false]

    belongs_to :liker,
        foreign_key: :liker_id,
        class_name: :User

    belongs_to :school_rating,
        foreign_key: :school_rating_id,
        class_name: :SchoolRating
end