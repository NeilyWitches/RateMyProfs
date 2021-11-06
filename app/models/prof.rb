class Prof < ApplicationRecord
    validates :first_name, :last_name, :subject, presence: true

    has_many :prof_reviews,
        foreign_key: :prof_id,
        class_name: :ProfReview
end