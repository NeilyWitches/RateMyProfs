class Prof < ApplicationRecord
    validates :first_name, :last_name, :subject, presence: true
end