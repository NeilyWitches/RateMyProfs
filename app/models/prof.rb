class Prof < ApplicationRecord
    validates :first_name, :last_name, :subject, presence: true

    has_many :prof_reviews,
        foreign_key: :prof_id,
        class_name: :ProfReview

    has_many :likes,
        through: :prof_reviews,
        source: :likes

    has_many :prof_saves,
        foreign_key: :prof_saved_id,
        class_name: :ProfSave

    has_many :savers,
        through: :prof_saves,
        source: :saver
end