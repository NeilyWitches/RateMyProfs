class ChangeBackToTrue < ActiveRecord::Migration[5.2]
  def change
    change_column_null :prof_reviews, :prof_id, true
  end
end
