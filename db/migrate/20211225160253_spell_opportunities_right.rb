class SpellOpportunitiesRight < ActiveRecord::Migration[5.2]
  def change
    rename_column :school_ratings, :opprtunities, :opportunities
  end
end
