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

ActiveRecord::Schema.define(version: 2021_11_01_065513) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

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
    t.integer "prof_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
