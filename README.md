# [Rate My Profs](https://rate-my-profs.herokuapp.com/#/)
## A clone of [Rate My Professors](https://www.ratemyprofessors.com/)

<img width="1440" alt="Screen Shot 2021-11-12 at 9 20 51 AM" src="https://user-images.githubusercontent.com/59269773/141481889-ba7b6aac-1b4e-4bef-90f3-d14d8c2b7975.png">

### Tools Used to build this website clone.

The site stores its data i.e. "prof reviews", "profs," "schools", "users," etc. on a postgreSQL database. On the backend, the database is quereied through the codebase built on a *Ruby on Rails* framework. On the frontend, I used a *React-Redux* framework to dynamically rerender the page upon update of the React store or React local state.

###Challenges###

![rmp selecting tags](https://user-images.githubusercontent.com/59269773/141484821-2839028e-d8a0-4d0d-b936-8f0a8ba015bb.gif)

Selecting tags was certainly a challenge. There were many reasons for this. Selecting a tag toggles a boolean value which dynamically sets the styling for the button. Also, I had implemented a constraint on the number of tags that may be clicked making sure to allow the user to still unclick a tag (if they change their mind), but not click a new tag. Finally, the biggest difficulty was converting the combination of boolean values into the approprate string values. In the [schema](https://github.com/NeilyWitches/RateMyProfs/wiki/Schema), the information is not stored as booleans, rather the prof reviews table has three columns of which string data types. You can imagine the difficulty in making this conversion possible. 

<img width="1113" alt="rmp top tags" src="https://user-images.githubusercontent.com/59269773/141486258-8389a853-09c2-4964-94a1-5e5ae64e22ad.png">

Another difficulty arose in building the algorithm for **asterisks** feature. Replicating the styling on *Rate My Professors* was easy thanks to Google Chrome's dev tools, but replicating their algorithms requires experience and natural problem solving skills. In order to implement top tags, I created a hash of the the counts of all the tags of one "prof." Javascript objects, however, like all hashes, cannot be sorted as there is no information about the order in which the items were stored to decreased time complexity in querying the hash. Therefore, it must be converted into an array. Doing so, breaks the associations between tag and count, and so the dilemma appears to be paradoxical. Taking the transpose of the array maintains the associations and once sorted, the tags can be matched with their counts. I had to remember to limit the number of 5, make sure not to consider any repeats, and make sure that if a prof had no tags or under 5, that nothing was rendered on the screen rather than a blank div. 
