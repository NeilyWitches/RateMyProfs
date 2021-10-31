class ChangeTagsNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :prof_reviews, :tag1, true
    change_column_null :prof_reviews, :tag2, true
    change_column_null :prof_reviews, :tag3, true
  end
end
