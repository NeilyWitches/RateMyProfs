# [Rate My Profs](https://rate-my-profs.herokuapp.com/#/)
## A clone of [Rate My Professors](https://www.ratemyprofessors.com/)

<img width="1440" alt="Screen Shot 2021-11-12 at 9 20 51 AM" src="https://user-images.githubusercontent.com/59269773/141481889-ba7b6aac-1b4e-4bef-90f3-d14d8c2b7975.png">

### Tools Used to build this website clone.

The site stores its data i.e. "prof reviews", "profs," "schools", "users," etc. on a postgreSQL database. On the backend, the database is quereied through the codebase built on a *Ruby on Rails* framework. On the frontend, I used a *React-Redux* framework to dynamically rerender the page upon update of the Redux store or React local state.

+ React
+ Redux
+ JavaScript
+ HTML5
+ CSS3
+ Ruby on Rails
+ PostgreSQL
+ Webpack
+ Git

### CRUD

+ CREATION of profs, prof, reviews, and user accounts.
+ READING of said reviews and summaries of profs.
+ UPDATING reviews depending on user credentials.
+ DELETION of the same.

### Challenges

![rmp selecting tags](https://user-images.githubusercontent.com/59269773/141484821-2839028e-d8a0-4d0d-b936-8f0a8ba015bb.gif)

Selecting tags was certainly a challenge. There were many reasons for this. Selecting a tag toggles a boolean value which dynamically sets the styling for the button. Also, I had implemented a constraint on the number of tags that may be clicked making sure to allow the user to still unclick a tag (if they change their mind), but not click a new tag. Finally, the biggest difficulty was converting the combination of boolean values into the approprate string values. In the [schema](https://github.com/NeilyWitches/RateMyProfs/wiki/Schema), the information is not stored as booleans, rather the prof reviews table has three columns of which string data types. You can imagine the difficulty in making this conversion possible. 

<img width="1113" alt="rmp top tags" src="https://user-images.githubusercontent.com/59269773/141486258-8389a853-09c2-4964-94a1-5e5ae64e22ad.png">

Another difficulty arose in building the algorithm for the **top tags** feature. Replicating the styling on *Rate My Professors* was easy thanks to Google Chrome's dev tools, but replicating their algorithms requires experience and natural problem solving skills. In order to implement top tags, I created a hash of the the counts of all the tags of one "prof." Javascript objects, however, like all hashes, cannot be sorted as there is no information about the order in which the items were stored so as to decrease the time complexity in querying the hash. Therefore, it must be converted into an array. Doing so, breaks the associations between tag and count, and so the dilemma appears to be paradoxical. I found that taking the transpose of the array maintains the associations and once sorted, the tags can be matched with their counts. I had to remember to limit the number of 5, make sure not to consider any repeats, and make sure that if a prof had no tags or under 5, that nothing was rendered on the screen rather than a blank div. 

<img width="1090" alt="prof index rmp" src="https://user-images.githubusercontent.com/59269773/141487870-e0c7be22-c113-4596-8200-4e2f8c945429.png">

A third challenge was rendering a statistical summary of all of the reviews written about a prof right there on the prof *index* page. The index page needed to grab information about all of each prof's reviews in order to calculate the stats on each (all agorithms from scratch as I have a background in statistics.) The very nature of this task is problematic in that a user may create a new prof without writing any reviews for that prof. The implication of this is that to get, say the ratio of the number of reviewers who would take the prof again, poses a divide by zero operation. Javascript as a result will print 'NaN' rather than something the user will understand. In order to provide a more user-friendly experience, I had to implement a check on the length of reviews and render the appropriate response accordingly.

![rmp character count](https://user-images.githubusercontent.com/59269773/141492102-05b9ffdd-348b-42f5-816a-eff861b0067e.gif)


The last difficulty I will mention, although I'd run into a host of many more was character count. At first I was taking the previous state and decrementing by one each time the input field encountered a change, i.e. upon every stroke of the keyboard. This seemed appropriate at first until I hit backspace. The display on the number of characters left kept on decrementing! So after thinking about how the number of characters is calculated, I came to realize it was a matter of subtracting the character limit (350) by the length of the value inside the text box.
