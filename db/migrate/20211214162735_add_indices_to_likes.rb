class AddIndicesToLikes < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, :liker_id
    add_index :likes, :review_id
  end
end
