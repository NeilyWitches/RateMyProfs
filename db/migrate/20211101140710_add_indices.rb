class AddIndices < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :email, unique: true
    add_index :users, :first_name
    add_index :users, :last_name
    add_index :users, :session_token
    add_index :users, :school_id
    add_index :users, :prof_id
  end
end
