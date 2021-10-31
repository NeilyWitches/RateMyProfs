class ChangeFloatsToInts < ActiveRecord::Migration[5.2]
  def change
    change_column :prof_reviews, :quality, :integer
    change_column :prof_reviews, :difficulty, :integer
  end
end
