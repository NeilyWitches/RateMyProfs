# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_28_155559) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "likes", force: :cascade do |t|
    t.boolean "like_type", null: false
    t.integer "liker_id", null: false
    t.integer "review_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["liker_id", "review_id"], name: "index_likes_on_liker_id_and_review_id", unique: true
    t.index ["liker_id"], name: "index_likes_on_liker_id"
    t.index ["review_id"], name: "index_likes_on_review_id"
  end

  create_table "prof_reviews", force: :cascade do |t|
    t.text "body", null: false
    t.integer "quality"
    t.integer "difficulty"
    t.string "klass", null: false
    t.string "grade", null: false
    t.string "tag1"
    t.string "tag2"
    t.string "tag3"
    t.boolean "take_again"
    t.boolean "for_credit"
    t.boolean "txt_book"
    t.boolean "attendance"
    t.integer "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "prof_id"
  end

  create_table "prof_saves", force: :cascade do |t|
    t.integer "saver_id", null: false
    t.integer "prof_saved_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["prof_saved_id"], name: "index_prof_saves_on_prof_saved_id"
    t.index ["saver_id"], name: "index_prof_saves_on_saver_id"
  end

  create_table "profs", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "subject", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "school_id", null: false
    t.index ["first_name"], name: "index_profs_on_first_name"
    t.index ["last_name"], name: "index_profs_on_last_name"
    t.index ["school_id"], name: "index_profs_on_school_id"
  end

  create_table "school_rating_likes", force: :cascade do |t|
    t.boolean "like_type", null: false
    t.integer "liker_id", null: false
    t.integer "school_rating_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["liker_id"], name: "index_school_rating_likes_on_liker_id"
    t.index ["school_rating_id"], name: "index_school_rating_likes_on_school_rating_id"
  end

  create_table "school_ratings", force: :cascade do |t|
    t.integer "internet", null: false
    t.integer "facilities", null: false
    t.integer "reputation", null: false
    t.integer "opportunities", null: false
    t.integer "location", null: false
    t.integer "food", null: false
    t.integer "clubs", null: false
    t.integer "social", null: false
    t.integer "happiness", null: false
    t.text "comment", null: false
    t.integer "school_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "safety", null: false
    t.index ["school_id"], name: "index_school_ratings_on_school_id"
  end

  create_table "schools", force: :cascade do |t|
    t.string "name", null: false
    t.string "state", null: false
    t.string "city", null: false
    t.string "website", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_schools_on_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "password_digest"
    t.string "session_token"
    t.integer "grad_yr"
    t.integer "school_id"
    t.integer "prof_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["first_name"], name: "index_users_on_first_name"
    t.index ["prof_id"], name: "index_users_on_prof_id"
    t.index ["school_id"], name: "index_users_on_school_id"
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end
