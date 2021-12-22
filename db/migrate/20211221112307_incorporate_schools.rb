class IncorporateSchools < ActiveRecord::Migration[5.2]
  def change
    remove_column :profs, :school_id, :integer
    add_column :profs, :school_id, :integer, null: false
    add_index :profs, :school_id
  end
end
