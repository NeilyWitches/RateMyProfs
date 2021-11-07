class ProfReview < ApplicationRecord
    validates :body, presence: true, length: { maximum: 350 }
    # validates :quality, :difficulty, inclusion: (1..5).to_a
    validates :klass, :prof_id, presence: true
    # validates :grade, inclusion: grades
    # validates :tag1, :tag2, :tag3, inclusion: tags
    # validates :take_again, :for_credit, :txt_book inclusion: [true, false]
    validates :attendance, inclusion: [nil, true, false]

    belongs_to :author,
        optional: true,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :prof,
        foreign_key: :prof_id,
        class_name: :Prof

    def grades
        [nil, 'A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 
        'C', 'C-', 'D+', 'D', 'D-' 'F', '
        Drop/Withdrawal', 'Incomplete', 'Not sure yet', 
        'Rather not say', 'Audit/No grade']
    end

    def tags
        [nil, 'GIVES GOOD FEEDBACK', 'RESPECTED', 'LOTS OF HOMEWORK', 
        'ACCESSIBLE OUTSIDE OF CLASS', 'GET READY TO READ', 
        'PARTICIPATION MATTERS', `SKIP CLASS YOU WON'T PASS.`, 
        `INSPIRATIONAL`, `GRADED BY FEW THINGS`, `TEST HEAVY`, 
        `GROUP PROJECTS`, `CLEAR GRADING CRITERIA`, `HILARIOUS`, 
        `BEWARE OF POP QUIZZES`, `AMAZING LECTURES`, `LECTURE HEAVY`,
        `CARING`, `EXTRA CREDIT`, `SO MANY PAPERS`, `TOUGH GRADER`]
    end

end