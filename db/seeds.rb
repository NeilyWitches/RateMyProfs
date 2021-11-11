# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Prof.destroy_all
ProfReview.destroy_all

demo_user = User.create(email: 'demouser@demo.com', first_name: 'Demo User', 
last_name: 'Demo User')
demo_user.password=('cupcake')
demo_user.save!

neil_u = User.create(email: 'neildusk@gmail.com', first_name: 'Neil', 
last_name: 'Pandya')
neil_u.password=('cupcake')
neil_u.save!

berta = User.create(email: 'bmarani@gmail.com', first_name: 'Berta', 
last_name: 'Marani')
berta.password=('cupcake')
berta.save!


neil_p = Prof.create(first_name: 'Neil', last_name: 'Pandya', 
subject: 'Physics')
george = Prof.create(first_name: 'George', last_name: 'Haramuniz', 
subject: 'Mathematics')
greg = Prof.create(first_name: 'Greg', last_name: 'Sabin', 
subject: 'Management')
tamsen = Prof.create(first_name: 'Tamsen', last_name: 'Wolff', 
subject: "English")
whitaker = Prof.create(first_name: 'Ed', last_name: "Whitaker", 
subject: "Science")
susskind = Prof.create(first_name: 'Leonard', last_name: "Susskind")
schaden = Prof.create(first_name: "Martin", last_name: "Schaden")
colton = Prof.create(first_name: "Clark", last_name: "Colton", subject: "Engineering",)
joseph = Prof.create(first_name: "Joseph", last_name: "Galeota", subject: "Percussion")
einstein = Prof.create(first_name: "Albert", last_name: "Einstein", subject: "Theoretical Physics")


einstein_review = ProfReview.create(body: "Thick german accent. Goes on tangents, but I mean you would too if you held two nobel prizes in physics. Randomly stops lecturing and just thinks and then runs away, I don't know what that's about maybe he just discovered the theory of everything.", 
klass: "GENERAL THEORY OF RELATIVITY", grade: "B-", quality: 3, difficulty: 5, take_again: true, 
for_credit: false, txt_book: false, prof_id: einstein.id, tag1: "HILARIOUS", tag2: "RESPECTED", tag3: "BEWARE OF POP QUIZZES")

joseph_review = ProfReview.create(body: "I took courses with Joe 15 years ago and to this day its one of the top musical learning experiences of my life", 
klass: "AFRDD101", grade: "", quality: 5, difficulty: 3, take_again: true, 
for_credit: true, txt_book: false, prof_id: joseph.id)

colton_review = ProfReview.create(body: "He doesn't care about students or teaching at all. Thus, he fails one of his primary duties as a professor.", 
klass: "1026", grade: "", quality: 1, difficulty: 5, take_again: false, 
for_credit: true, txt_book: false, prof_id: colton.id)

schaden_review = ProfReview.create(body: "Thermodynamics with Professor Schaden is very difficult. He is a theoretical physicist and explains and develops concepts in a very theoretical manner. Given that in Thermo, most people do not have much knowledge except for the basics like temperature and engines, it becomes very difficult to understand the material. He's a great guy though.", 
klass: "THERMO", grade: "", quality: 3, difficulty: 4, take_again: false,
for_credit: true, txt_book: false, prof_id: schaden.id)

susskind_review = ProfReview.create(body: "One of the best professors and physicists in the world now.", 
klass: "PHYS201", grade: "A+", quality: 5, difficulty: 3, take_again: true, 
for_credit: false, txt_book: false, prof_id: susskind.id)

whitaker_review = ProfReview.create(body: "Was often completely incorrect in his lectures about basic physics, and would proceed to get whiny when students would not pay attention. If you want the respect of your students, you should actually have an understanding of the material you are teaching.",
klass: "PE111", grade: "", quality: 1, difficulty: 5, take_again: false, 
for_credit: true, txt_book: true, prof_id: whitaker.id)

neil_review_1 = ProfReview.create(body: "Dr. Pandya is just like Ted from 'How I met your mother'. Coming from a communications background I never thought I would be interested in physics, but this professor really made me want to become an Einstein. This class is HARD. H. A. R. D. but if you put the work in you'll know as much as Newton... And then some!", klass: 'PHY185', grade: 'Rather not say', quality: 4, 
difficulty: 5, take_again: true, for_credit: true, txt_book: false, 
tag1: 'TOUGH GRADER', tag2: 'INSPIRATIONAL', tag3: 'HILARIOUS', prof_id: neil_p.id)

neil_review_2 = ProfReview.create(body: "Neil was an admirable professor, with a great power of lucid exposition. His understanding is expressed in how tangible he makes the course content to students. I had no prior physics experience and he helped me grasp the concepts with ease. It is a college physics class though and nothing less than your best effort should be exerted.", klass: 'PHY185', grade: 'A+', 
quality: 5, difficulty: 3, take_again: true, for_credit: true, 
txt_book: true, attendance: false, prof_id: neil_p.id, author_id: demo_user.id)

neil_review_3 = ProfReview.create(body: "Neil is not the best prof and still has a lot to learn, but to say he doesn't care is not accurate. he gives tons of extra credit, drops the lowest test, and allows make up tests. There is a lot of reading to be done for the class. and to the comments on here, Neil answers many questions. some questions don't have answers or are in the reading.", klass: 'PHY185',
grade: 'B+', quality: 4, difficulty: 4, take_again: true, for_credit: true,
txt_book: true, prof_id: neil_p.id, tag1: 'GET READY TO READ', 
tag2: "SKIP CLASS? YOU WON'T PASS.", tag3: 'EXTRA CREDIT')

neil_review_4 = ProfReview.create(body: "Don't listen to the salty dude onhere. He probably didn't read the book or didn't attend lecture so he was failing so he dropped the course. Yeah, this prof is hypercritical on the exams, but he gives a huge curve, my boy expected an F in the class, he got a C. He doesn't give reviews bc he treats the class as a real class in college not grade 13.", klass: "PHY185", grade: "B+", quality: 4,
difficulty: 4, take_again: true, for_credit: true, txt_book: true, 
prof_id: neil_p.id, tag1: "TOUGH GRADER", tag2: "SKIP CLASS YOU WON'T PASS.", 
tag3: "INSPIRATIONAL")

neil_review_5 = ProfReview.create(body: "This professor was the worst professor/teacher I have ever had in my whole entire life. He doesn't know what he's doing, he doesn't care, and he doesn't know how to teach. 4 tests the whole semester and about 10-15 chapters per each. No reviews or anything. I'm warning every student ; DO NOT TAKE HIM. You WILL regret it, i promise.", klass: "PHY185", grade: "Not sure yet", quality: 1,
difficulty: 5, take_again: false, for_credit: true, txt_book: false,
tag1: "TOUGH GRADER", tag2: "GROUP PROJECTS", tag3: "LECTURE HEAVY", 
prof_id: neil_p.id)



george_review = ProfReview.create(body: "This is the best Ive professor ever had. This course is online and he is so good with technology, so easy and clear directions for students. He always explains everything so clear, always open for questions, dont hesitate and sign up for his class.", klass: 'MAT040', grade: 'Not sure yet', quality: 5,
difficulty: 1, take_again: true, for_credit: true, txt_book: false,
attendance: true, tag1: 'GIVES GOOD FEEDBACK', tag2: 'INSPIRATIONAL', 
prof_id: george.id, author_id: demo_user.id)



greg_review = ProfReview.create(body: "Corporate Finance was a great class. We did cases each class that were fun and interactive. It made learning easier. However, we also had to do a valuation project that took at least 20 hours. Plus preparing all of those cases meant there was A LOT of homework. But it was worth it. Best class ever!", 
klass: 'MGMTE2000', grade: 'A-', quality: 5, difficulty: 5, 
take_again: true, for_credit: true, txt_book: false, attendance: false,
tag1: 'PARTICIPATION MATTERS', tag2: 'GROUP PROJECTS', 
tag3: 'AMAZING LECTURES', prof_id: greg.id, author_id: neil_u.id)

greg_review_2 = ProfReview.create(body: "I have really enjoyed Professor Sabin's corporate finance class this summer. This is the only class I have taken at HES, but I am really glad I chose this one. He mixed cases and lectures in a way that kept things interesting. While there wasn't a book to read, we did two cases each week and a big project that took A LOT of time. 100% great prof",
klass: "MGMTS2700", grade: "A", quality: 5, difficulty: 5, take_again: true,
for_credit: true, txt_book: false, attendance: false, tag1: "PARTICIPATION
MATTERS", tag2: "AMAZING LECTURES", tag3: "SO MANY PAPERS", prof_id: greg.id)

greg_review_3 = ProfReview.create(body: "Professor Sabin was my first professor at HES, and I loved his Financial Accounting class so much, I signed up for another Finance class with him the following year. I had no corp or finance background but he made the material digestible and was so caring of his students. He will challenge you, but he's never unfair. Best professor @ HES!", 
klass: "MGMTE2000", grade: "A", quality: 5, difficulty: 3, take_again: true,
for_credit: true, txt_book: true, attendance: true, tag1: "GIVES GOOD FEEDBACK",
tag2: "RESPECTED", tag3: "CLEAR GRADING CRITERIA", prof_id: greg.id)

greg_review_4 = ProfReview.create(body: "I took Corporate Finance during the compressed summer semester. He was great. I really enjoyed his class and I am looking forward to taking Managerial Accounting with him in the fall and Investments in the spring. Great teacher.", 
klass: "MGMTS2700", grade: "A", quality: 5, difficulty: 4, take_again: true,
for_credit: true, txt_book: false, attendance: false, tag1: "HILARIOUS", 
tag2: "AMAZING LECTURES", tag3: "CARING", prof_id: greg.id)

greg_review_5 = ProfReview.create(body: "By far the best professor at HES. I absolutely loved his class and learned so much. Really caring, knowledgable and helpful professor. Made the material interesting with dynamic guest lectures. I would take any class he teaches. I am well outside the age for a normal graduate student and Professor Sabin made me feel welcome and valued.", 
klass: "E2000", grade: "A", quality: 5, difficulty: 4, take_again: true,
for_credit: true, txt_book: true, attendance: true, tag1: "RESPECTED", 
tag2: "AMAZING LECTURES", tag3: "CARING", prof_id: greg.id)

greg_review_6 = ProfReview.create(body: "Great teacher and person. I cant wait to take another class with Professor Sabin in the future.", 
klass: "MGMTE2000", grade: "Not sure yet", quality: 5, difficulty: 3, take_again: true,
for_credit: true, txt_book: true, attendance: false, tag1: "ACCESSIBLE OUTSIDE OF CLASS",
tag2: "GET READY TO READ", tag3: "AMAZING LECTURES", prof_id: greg.id)

greg_review_7 = ProfReview.create(body: "Great professor and really enjoyable experience. As long as you're prepared and have the subject matter read prior to the lecture you will do well. Expect to be challenged and learn resources for everyday practical application. He is extremely accessible all semester. If you have the opportunity take his class! I promise you won't be disappointed!", 
klass: "MGMTE2000", grade: "", quality: 5, difficulty: 4, take_again: true,
for_credit: true, txt_book: true, attendance: true, tag1: "PARTICIPATION MATTERS",
tag2: "CLEAR GRADING CRITERIA", tag3: "TOUGH GRADER", prof_id: greg.id)


tamsen_review_1 = ProfReview.create(body: "Best lectures of my life. This class--Contemporary Drama--is amazing.",
klass: "ENG356", grade: "", quality: 5, difficulty: 4, take_again: true,
for_credit: true, txt_book: false, attendance: true, prof_id: tamsen.id)