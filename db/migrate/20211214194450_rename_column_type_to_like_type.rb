class RenameColumnTypeToLikeType < ActiveRecord::Migration[5.2]
  def change
    rename_column :likes, :type, :like_type
  end
end
