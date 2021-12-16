class RemoveProfIdFromLikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :prof_id
  end
end
