class AddSafetyToSchoolRatings < ActiveRecord::Migration[5.2]
  def change
    add_column :school_ratings, :safety, :integer, null: false
  end
end
