class AddLikerLikeeComboIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, [:liker_id, :review_id], unique: true
  end
end
