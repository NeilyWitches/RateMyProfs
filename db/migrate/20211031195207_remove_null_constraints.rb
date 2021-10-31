class RemoveNullConstraints < ActiveRecord::Migration[5.2]
  def change
    change_column_null :prof_reviews, :quality, true
    change_column_null :prof_reviews, :difficulty, true
  end
end
