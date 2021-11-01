class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :password_digest
      t.string :session_token
      t.integer :grad_yr
      t.integer :school_id
      t.integer :prof_id
      t.timestamps
    end
  end
end
