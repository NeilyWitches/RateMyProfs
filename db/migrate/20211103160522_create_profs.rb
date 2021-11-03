class CreateProfs < ActiveRecord::Migration[5.2]
  def change
    create_table :profs do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :subject, null: false
      t.integer :school_id
      t.timestamps
    end

    add_index :profs, :first_name
    add_index :profs, :last_name
    add_index :profs, :school_id
    
  end
end
