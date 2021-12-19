class CreateProfSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :prof_saves do |t|
      t.integer :saver_id, null:false
      t.integer :prof_saved_id, null:false
      t.timestamps
    end

    add_index :prof_saves, :saver_id
    add_index :prof_saves, :prof_saved_id
    
  end
end
