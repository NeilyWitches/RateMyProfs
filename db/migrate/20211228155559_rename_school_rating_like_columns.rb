class RenameSchoolRatingLikeColumns < ActiveRecord::Migration[5.2]
  def change
    rename_column :school_rating_likes, :review_id, :school_rating_id
    rename_column :school_rating_likes, :type, :like_type

    add_index :school_rating_likes, :school_rating_id
    add_index :school_rating_likes, :liker_id
  end
end
