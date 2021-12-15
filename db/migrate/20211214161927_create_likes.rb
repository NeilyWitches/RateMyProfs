class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.boolean :type, null: false
      t.integer :liker_id, null: false
      t.integer :review_id, null: false
      t.timestamps
    end
  end
end
