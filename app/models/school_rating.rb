class SchoolRating < ApplicationRecord
    validates :internet, :facilities, :reputation, :opprtunities, :location, :food, :clubs, :social, :happiness, inclusion: (1..5).to_a
    validates :comment, :school_id, presence: true
    validates :comment, length: { maximum: 350 }

    belongs_to :school,
        foreign_key: :school_id,
        class_name: :School
end