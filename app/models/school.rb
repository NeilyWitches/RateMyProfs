class School < ApplicationRecord
    validates :name, :state, :city, :website, presence: :true
    validates :name, :website, uniqueness: true
end