class CreateUser < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :password_digest
      t.string :session_token
      t.integer :grad_yr
      t.integer :school_id
      t.integer :prof_id
      t.timestamps
    end

    create_table :prof_reviews do |t|
      t.text :body, null: false
      t.float :quality, null: false
      t.float :difficulty, null: false
      t.string :class, null: false
      t.string :grade, null: false
      t.string :tag1, null: false
      t.string :tag2, null: false
      t.string :tag3, null: false
      t.boolean :take_again
      t.boolean :for_credit
      t.boolean :txt_book
      t.boolean :attendance
      t.integer :author_id
      t.integer :prof_id
      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :first_name
    add_index :users, :last_name
    add_index :users, :session_token
    add_index :users, :school_id
    add_index :users, :prof_id
    add_index :prof_reviews, :author_id
    add_index :prof_reviews, :prof_id
  end
end
