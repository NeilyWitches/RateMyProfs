class AddProfIdColumnToLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :prof_id, :integer, null: false
    add_index :likes, :prof_id
  end
end
