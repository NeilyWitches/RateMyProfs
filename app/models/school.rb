class School < ApplicationRecord
    validates :name, :state, :city, :website, presence: :true
    validates :name, :website, uniqueness: true

    has_many :profs,
        foreign_key: :school_id,
        class_name: :Prof

    has_many :school_ratings,
        foreign_key: :school_id,
        class_name: :SchoolRating

    has_many :prof_reviews,
        through: :profs,
        source: :prof_reviews
end