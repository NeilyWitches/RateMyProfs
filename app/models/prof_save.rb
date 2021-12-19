class ProfSave < ApplicationRecord
    validates :saver_id, :prof_saved_id, presence: true
    validates :saver_id, uniqueness: { scope: :prof_saved_id }
    
    belongs_to :saver,
        foreign_key: :saver_id,
        class_name: :User

    belongs_to :prof,
        foreign_key: :prof_saved_id,
        class_name: :Prof
end