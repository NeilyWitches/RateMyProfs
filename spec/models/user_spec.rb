require 'rails_helper'

RSpec.describe User, type: :model do
  context 'validations' do
    it 'ensures email presence' do
      test_user = User.new(first_name: "Test User", school_id: 1)
      test_user.password=('cupcake')
      expect(test_user.save).to eq(false)
    end

    it 'ensures email cannot be blank' do
      test_user = User.new(email: '', first_name: 'Test User', school_id: 1)
      test_user.password=('cupcake')
      expect(test_user.save).to eq(false)
    end

    it 'ensures email uniqueness' do
      test_user_1 = User.new(email: 'testuser@test.com', first_name: "Test User", school_id: 1)
      test_user_1.password=('cupcake')
      test_user_1.save!
      test_user_2 = User.new(email: 'testuser@test.com', first_name: "Test User 2", school_id: 1)
      test_user_2.password=('cupcake2')
      expect(test_user_2.save).to eq(false)
    end

    it 'ensures first name presence' do
      test_user = User.new(email: 'testuser@test.com', school_id: 1)
      test_user.password=('cupcake')
      expect(test_user.save).to eq(false)
    end

    it 'ensures that two users cannot sign up as the same prof' do
      test_user_1 = User.new(email: 'testuser1@test.com', first_name: "Test User 1", school_id: 1, prof_id: 1)
      test_user_1.password=('cupcake')
      test_user_1.save!
      test_user_2 = User.new(email: "testuser2@test.com", first_name: 'Test User 2', school_id: 1, prof_id: 1)
      test_user_2.password=('cupcake')
      expect(test_user_2.save).to be(false)
    end

    it 'allows for the creation of a user given valid paramters' do
      test_user = User.new(email: 'testuser@test.com', first_name: "Test User", school_id: 1)
      test_user.password=('cupcake')
      expect(test_user.save).to eq(true)
    end
  end

  context 'associations' do
    it 'has many prof reviews' do
      test_school = School.create!(name: 'Bergen Community College', state: 'NJ', city: 'Paramus', website: "https://bergen.edu/")
      test_prof = Prof.create!(first_name: "Charles", last_name: "King", subject: "Marketing", school_id: test_school.id)
      test_user_1 = User.new(email: 'testuser1@test.com', first_name: "Test User 1")
      test_user_1.password=('cupcake')
      test_user_1.save!
      test_review_1 = ProfReview.create!(body: "Dr. Pandya is just like Ted from 'How I met your mother'. Coming from a communications background I never thought I would be interested in physics, but this professor really made me want to become an Einstein. This class is HARD. H. A. R. D. but if you put the work in you'll know as much as Newton... And then some!", klass: 'PHY185', grade: 'Rather not say', quality: 4, difficulty: 5, take_again: true, for_credit: true, txt_book: false, tag1: 'TOUGH GRADER', tag2: 'INSPIRATIONAL', tag3: 'HILARIOUS', prof_id: test_prof.id, author_id: test_user_1.id)
      test_review_2 = ProfReview.create!(body: "Neil was an admirable professor, with a great power of lucid exposition. His understanding is expressed in how tangible he makes the course content to students. I had no prior physics experience and he helped me grasp the concepts with ease. It is a college physics class though and nothing less than your best effort should be exerted.", klass: 'PHY185', grade: 'A+', quality: 5, difficulty: 3, take_again: true, for_credit: true, txt_book: true, attendance: false, prof_id: test_prof.id, author_id: test_user_1.id)
      expect(test_user_1.prof_reviews.length).to eq(2)
    end

    it 'has many likes' do
      test_school = School.create!(name: 'Bergen Community College', state: 'NJ', city: 'Paramus', website: "https://bergen.edu/")
      test_prof = Prof.create!(first_name: "Charles", last_name: "King", subject: "Marketing", school_id: test_school.id)
      test_user = User.new(email: 'testuser1@test.com', first_name: "Test User 1")
      test_user.password=('cupcake')
      test_user.save!
      test_review_1 = ProfReview.create!(body: "Dr. Pandya is just like Ted from 'How I met your mother'. Coming from a communications background I never thought I would be interested in physics, but this professor really made me want to become an Einstein. This class is HARD. H. A. R. D. but if you put the work in you'll know as much as Newton... And then some!", klass: 'PHY185', grade: 'Rather not say', quality: 4, difficulty: 5, take_again: true, for_credit: true, txt_book: false, tag1: 'TOUGH GRADER', tag2: 'INSPIRATIONAL', tag3: 'HILARIOUS', prof_id: test_prof.id, author_id: test_user.id)
      test_review_2 = ProfReview.create!(body: "Neil was an admirable professor, with a great power of lucid exposition. His understanding is expressed in how tangible he makes the course content to students. I had no prior physics experience and he helped me grasp the concepts with ease. It is a college physics class though and nothing less than your best effort should be exerted.", klass: 'PHY185', grade: 'A+', quality: 5, difficulty: 3, take_again: true, for_credit: true, txt_book: true, attendance: false, prof_id: test_prof.id, author_id: test_user.id)
      test_user_likes_test_rev_1 = Like.create!(like_type: true, liker_id: test_user.id, review_id: test_review_1.id)
      test_user_likes_test_rev_2 = Like.create!(like_type: false, liker_id: test_user.id, review_id: test_review_2.id)
      expect(test_user.likes.length).to eq(2)  
    end

    it 'has many prof saves' do
      test_school_1 = School.create!(name: 'Bergen Community College', state: 'NJ', city: 'Paramus', website: "https://bergen.edu/")
      test_school_2 = School.create!(name: 'Harvard University', state: 'MA', city: 'Cambridge', website: "https://www.harvard.edu/")
      test_prof_1 = Prof.create!(first_name: "Charles", last_name: "King", subject: "Marketing", school_id: test_school_1.id)
      test_prof_2 = Prof.create!(first_name: 'Kyle', last_name: 'Bates', subject: 'Engineering', school_id: test_school_2.id)
      test_user = User.new(email: 'testuser1@test.com', first_name: "Test User 1")
      test_user.password=('cupcake')
      test_user.save!      
      test_user_saves_test_prof_1 = ProfSave.create!(saver_id: test_user.id, prof_saved_id: test_prof_1.id)
      test_user_saves_test_prof_1 = ProfSave.create!(saver_id: test_user.id, prof_saved_id: test_prof_2.id)
      expect(test_user.prof_saves.length).to eq(2)
    end

    it 'has many profs saved' do
      test_school_1 = School.create!(name: 'Bergen Community College', state: 'NJ', city: 'Paramus', website: "https://bergen.edu/")
      test_school_2 = School.create!(name: 'Harvard University', state: 'MA', city: 'Cambridge', website: "https://www.harvard.edu/")
      test_prof_1 = Prof.create!(first_name: "Charles", last_name: "King", subject: "Marketing", school_id: test_school_1.id)
      test_prof_2 = Prof.create!(first_name: 'Kyle', last_name: 'Bates', subject: 'Engineering', school_id: test_school_2.id)
      test_user = User.new(email: 'testuser1@test.com', first_name: "Test User 1")
      test_user.password=('cupcake')
      test_user.save!      
      test_user_saves_test_prof_1 = ProfSave.create!(saver_id: test_user.id, prof_saved_id: test_prof_1.id)
      test_user_saves_test_prof_1 = ProfSave.create!(saver_id: test_user.id, prof_saved_id: test_prof_2.id)
      expect(test_user.profs_saved.length).to eq(2)
    end

    it 'wrote about many profs' do
      chicago = School.create!(name: 'University of Illinois at Chicago', state: 'IL', city: 'Chicago', website: 'https://www.uchicago.edu/')
      test_user = User.new(email: 'testuser1@test.com', first_name: "Test User 1")
      test_user.password=('cupcake')
      test_user.save!
      chicago_prof_1 = Prof.create!(first_name: "Charles", last_name: "King", subject: "Marketing", school_id: chicago.id)
      chicago_prof_2 = Prof.create!(first_name: "Stanley", last_name: "Waite", subject: "Business", school_id: chicago.id)
      chicago_prof_1_rev_1 = ProfReview.create!(body: "Students Beware! The most monotonous class I have ever taken. Almost inaudible even with his microphone. Forces you to endure the pain of listening to him review his PP slides due to his many pop quizzes. Class is harder then any intro to mktg class should ever be. Avoid if possible.", quality: 1, difficulty: 4, klass: "MKTG360", txt_book: false, grade: "", prof_id: chicago_prof_1.id, author_id: test_user.id)
      chicago_prof_2_rev_1 = ProfReview.create!(body: "This is the only professor with a heart. Tough grader, and hard exams, but if you ask what's on the exam HE WILL TELL YOU! come to class, attendance matters. I worked very hard and attended class but was barely passing, but still got a C cuz he knew I put in effort. SO yea, hard but flexible.", quality: 5, difficulty: 4, klass: "FIN431", for_credit: true, attendance: true, take_again: true, grade: "C", txt_book: false, tag1: "TOUGH GRADER", tag2: "GIVES GOOD FEEDBACK", prof_id: chicago_prof_2.id, author_id: test_user.id)
      expect(test_user.profs_written_about.length).to eq(2)
    end

    it 'has many schools who have profs who have reviews written by the user' do
      test_user = User.new(email: 'testuser1@test.com', first_name: "Test User 1")
      test_user.password=('cupcake')
      test_user.save!
      ucsb = School.create!(name: 'University of California Santa Barbara', state: 'CA', city: 'Santa Barbara', website: 'https://www.ucsb.edu/')
      harvard = School.create!(name: 'Harvard University', state: 'MA', city: 'Cambridge', website: "https://www.harvard.edu/")
      ucsb_prof_1 = Prof.create!(first_name: "Matthea", last_name: "Cremers", subject: "Anthropology", school_id: ucsb.id)
      harvard_prof_1 = Prof.create!(first_name: 'Greg', last_name: 'Sabin', subject: 'Management', school_id: harvard.id)
      ucsb_prof_1_rev_1 = ProfReview.create!(body: "Overall, terrible. Inconsistent and unclear grading, unhelpful, just plain mean. Comes across in lecture as kind, if lost, but do not bother going to office hours because that facade disappears when she isn't lecturing. Laughs at what she considers dumb questions, huffs, rolls eyes, all to hide the fact that she actually has no clue.", quality: 1, difficulty: 5, klass: "ANTH139", grade: "", tag1: "GRADED BY FEW THINGS", take_again: false, for_credit: true, txt_book: false, attendance: true, prof_id: ucsb_prof_1.id, author_id: test_user.id)
      harvard_prof_1_review_1 = ProfReview.create!(body: "Corporate Finance was a great class. We did cases each class that were fun and interactive. It made learning easier. However, we also had to do a valuation project that took at least 20 hours. Plus preparing all of those cases meant there was A LOT of homework. But it was worth it. Best class ever!", klass: 'MGMTE2000', grade: 'A-', quality: 5, difficulty: 5, take_again: true, for_credit: true, txt_book: false, attendance: false,tag1: 'PARTICIPATION MATTERS', tag2: 'GROUP PROJECTS', tag3: 'AMAZING LECTURES', prof_id: harvard_prof_1.id, author_id: test_user.id)
      expect(test_user.schools_of_profs_written_about.length).to eq(2)
    end

  end
end
