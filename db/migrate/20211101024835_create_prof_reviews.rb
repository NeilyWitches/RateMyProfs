class CreateProfReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :prof_reviews do |t|
      t.text :body, null: false
      t.integer :quality
      t.integer :difficulty
      t.string :class, null: false
      t.string :grade, null: false
      t.string :tag1
      t.string :tag2
      t.string :tag3
      t.boolean :take_again
      t.boolean :for_credit
      t.boolean :txt_book
      t.boolean :attendance
      t.integer :author_id
      t.integer :prof_id
      t.timestamps
    end
  end
end
