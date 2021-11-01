class RenameClass < ActiveRecord::Migration[5.2]
  def change
    rename_column :prof_reviews, :class, :klass
  end
end
