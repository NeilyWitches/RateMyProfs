# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

neil_review_1 = ProfReview.create(body: "Dr. Pandya is just like 
Ted from 'How I met your mother'. Coming from a communications 
background I never thought I would be interested in physics, but this 
professor really made me want to become an Einstein. This class is HARD. 
H. A. R. D. but if you put the work in you'll know as much as Newton... 
And then some!", klass: 'PHY185', grade: 'Rather not say', quality: 3, 
difficulty: 5, prof_id: 1)

neil_review_2 = ProfReview.create(body: "Neil was an admirable professor, 
with a great power of lucid exposition. His understanding is expressed in 
how tangible he makes the course content to students. 
I had no prior physics experience and he helped me grasp the concepts 
with ease. It is a college physics class though and nothing less than 
your best effort should be exerted.", klass: 'PHY185', grade: 'A+', 
quality: 5, difficulty: 4, prof_id: 1, author_id: 1)

george_review = ProfReview.create(body: "This is the best Ive professor 
ever had. This course is online and he is so good with technology, so 
easy and clear directions for students. He always explains everything so 
clear, always open for questions, dont hesitate and sign up for his 
class.", klass: 'MAT040', grade: 'Not sure yet', quality: 5, 
difficulty: 1, prof_id: 2, author_id: 1)

greg_review = ProfReview.create(body: "Corporate Finance was a great 
class. We did cases each class that were fun and interactive. It made 
learning easier. However, we also had to do a valuation project that 
took at least 20 hours. Plus preparing all of those cases meant 
there was A LOT of homework. But it was worth it. Best class ever!", 
klass: 'MGMTE2000', grade: 'A-', quality: 5, difficulty: 5, prof_id: 3,
author_id: 2)
