class RemoveNullFalse < ActiveRecord::Migration[5.2]
  def change
    remove_column :prof_reviews, :prof_id, :integer
    add_column :prof_reviews, :prof_id, :integer
  end
end
