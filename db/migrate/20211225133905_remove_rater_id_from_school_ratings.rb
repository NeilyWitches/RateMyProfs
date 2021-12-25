class RemoveRaterIdFromSchoolRatings < ActiveRecord::Migration[5.2]
  def change
    remove_column :school_ratings, :rater_id
  end
end
