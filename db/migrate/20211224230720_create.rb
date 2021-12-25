class Create < ActiveRecord::Migration[5.2]
  def change
    create_table :school_ratings do |t|
      t.integer :internet, null: false
      t.integer :facilities, null: false
      t.integer :reputation, null: false
      t.integer :opprtunities, null: false
      t.integer :location, null: false
      t.integer :food, null: false
      t.integer :clubs, null: false
      t.integer :social, null: false
      t.integer :happiness, null: false
      t.text :comment, null: false
      t.integer :rater_id
      t.integer :school_id, null: false
      t.timestamps
    end

    add_index :school_ratings, :rater_id
    add_index :school_ratings, :school_id
  end
end
