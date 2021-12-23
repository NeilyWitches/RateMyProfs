class School < ApplicationRecord
    validates :name, :state, :city, :website, presence: :true
    validates :name, :website, uniqueness: true

    has_many :profs,
        foreign_key: :school_id,
        class_name: :Prof
end