# Rate My PRofs

[Live Link](https://rate-my-profs.herokuapp.com/#/)
## A clone of [Rate My Professors](https://www.ratemyprofessors.com/)

<img width="1440" alt="home screen" src="https://user-images.githubusercontent.com/59269773/147616977-6005e590-202c-4e55-a38a-44b5a23917b0.png">

### Summary ###
Rate My Profs is a complete clone of Rate My Professors, a site where users go to review professors and schools in order to better inform prospecting students. This clone has all of the features of the original site and more.

### Tools Used to build this website clone.

+ React
+ Redux
+ JavaScript
+ HTML5
+ CSS3
+ Ruby on Rails
+ PostgreSQL
+ Webpack
+ Git
+ lodash
+ ajax
+ Active Record

### CRUD Features

+ Full **CRUD** on prof reviews

<img width="1440" alt="creating_prof_reviews" src="https://user-images.githubusercontent.com/59269773/147617901-c355307b-938e-43e6-a790-a23bc01cd128.png">

<img width="1440" alt="reading_prof_reviews" src="https://user-images.githubusercontent.com/59269773/147617936-74f4194f-bc43-4709-afe0-e065a9760186.png">

<img width="1440" alt="Screen Shot 2021-12-28 at 8 05 07 PM" src="https://user-images.githubusercontent.com/59269773/147617962-c4dcf795-7432-4832-9186-092bd90d252f.png">

+ Full **CRUD** on user accounts, including authorization for **creation** and **updating**

<img width="1440" alt="creating_user" src="https://user-images.githubusercontent.com/59269773/147618005-56e723a1-b94d-4d8f-92bf-6c718c671b0c.png">

<img width="1440" alt="editing users" src="https://user-images.githubusercontent.com/59269773/147618031-f4abc245-07ed-43c8-987e-3dd9045bfab2.png">

<img width="1440" alt="Screen Shot 2021-12-28 at 8 08 13 PM" src="https://user-images.githubusercontent.com/59269773/147618047-5161236f-764f-4e15-87ca-b1097d2e1ae4.png">

+ **Creation** of profs

<img width="1440" alt="creating profs" src="https://user-images.githubusercontent.com/59269773/147618076-71352185-6250-4b3d-848f-da1610ad2195.png">

**updating** of profs if the user is signed in as an existing prof in the database, a feature not found in original site

<img width="1440" alt="edit prof" src="https://user-images.githubusercontent.com/59269773/147618131-f9dcfe02-69cd-4bb6-8c39-94cf8933e88c.png">

+ Prof saves: users can save and unsave profs and view the profs they saved conviently in one page

![prof_save_gif](https://user-images.githubusercontent.com/59269773/147618141-17e83015-0d48-4607-aadb-38faafffe6af.gif)

<img width="1440" alt="saved profs" src="https://user-images.githubusercontent.com/59269773/147618275-a032feba-7f35-47a7-bb4a-d675c88e3bf9.png">


+ **Creation** of schools

<img width="1440" alt="school create" src="https://user-images.githubusercontent.com/59269773/147618178-e6ceb01c-f9dc-45a9-ae59-e7295985da30.png">

+ **Creation** of school ratings

<img width="1440" alt="creating school ratings" src="https://user-images.githubusercontent.com/59269773/147618215-617c8cf7-0721-42f8-836f-0e20ec075135.png">

<img width="1440" alt="reading school ratings" src="https://user-images.githubusercontent.com/59269773/147618352-fdca00d1-e11c-4f92-9a1d-8e9bab9400f8.png">

+ **Likes:** users can like, unlike, dislike, undislike both school ratings and prof reviews

### UI features

+ Search: users can search for a school or prof from the home page or from anypage using the navbar

<img width="1440" alt="school search results" src="https://user-images.githubusercontent.com/59269773/147618422-1c0fe502-754b-4846-ad20-4d5fc478d0fa.png">

<img width="1440" alt="prof search results" src="https://user-images.githubusercontent.com/59269773/147618449-7e9777ad-bf85-4cb1-8d54-bbece23dace5.png">

+ List filters: users can filter profs by department or prof reviews by course

![filtering profs gif](https://user-images.githubusercontent.com/59269773/147618623-43aad375-9993-4a70-8420-1d468a703f7a.gif)

<img width="191" alt="filtering prof reviews" src="https://user-images.githubusercontent.com/59269773/147618683-9af057b8-9978-4ef6-be78-d7b733bcf623.png">

+ Character count: displays the number of characters left in the text field for both prof reviews and school ratings

![rmp character count](https://user-images.githubusercontent.com/59269773/147618715-b82aed67-f027-41fb-9527-1c2b0bcc364a.gif)

+ Stats: displays stats on profs, schools, school ratings, and prof reviews, such as avg quality, percentage of reviewers who would the the prof again, top tags, top profs, average school rating for each category, and overall school rating

<img width="1061" alt="prof stats" src="https://user-images.githubusercontent.com/59269773/147618753-d8ffe759-3997-4a4c-b365-8f5fd669e0ba.png">

<img width="1440" alt="Screen Shot 2021-12-28 at 8 27 06 PM" src="https://user-images.githubusercontent.com/59269773/147618794-039277b5-3880-4ce3-86d8-5524ff6c9e29.png">

+ No bugs, console errors, warnings, comments, console logs, etc.

### Optimizations

+ avoiding N + 1 queries

```ruby
@school = School.includes(:profs, :prof_reviews, :school_ratings, :school_rating_likes).find(params[:schoolId])
```

+ fetching only the information necessary by creating custom routes and views

```ruby
def index
    if params[:onlyProfs] == 'true'
        @profs = Prof.all
        render 'api/profs/only_profs'
    else
        names = params[:profQuery].split()
        first_name = names[0]
        last_name = names[1]

        if params[:schoolName] == "all schools"
            @schools = School.all.includes(:profs)

            if !first_name
                @profs = Prof.all.includes(:prof_reviews)
                render :index
                return
```

+ fetching enough information such that the transition from page to page is smooth and the database does not have to be queried frequently
+ making heavy calculations as little as possible, saving the information such that the calculations are not repeated with every rerender

```javascript
componentDidUpdate(prevProps) {
    if (prevProps.schoolRatings !== this.props.schoolRatings){
        this.categories = Object.keys(this.props.schoolRatings[0])
        this.avgRatings = this.getAvgRatings(this.props.schoolRatings, this.categories);
        this.overallRating = this.getOverallRating(this.avgRatings)
        this.forceUpdate()
    }
}
```

+ keeping code DRY by, for example, iterating through an array only once but making several different important computations through the one iteration

```javascript
getStats(profReviews, numReviews) {
    let sumQual = 0;
    let sumDiff = 0;
    let numWouldTakeAgain = 0;
    let numWouldNotTakeAgain = 0;
    for (let i = 0; i < numReviews; i++) {
        sumQual += profReviews[i].quality;
        sumDiff += profReviews[i].difficulty;
        if (profReviews[i].take_again === true) {
            numWouldTakeAgain ++
        } else if (profReviews[i].take_again === false) {
            numWouldNotTakeAgain ++
        }
    }
    let stats = [sumQual, sumDiff].map(num => num / numReviews)
    stats.push(numWouldTakeAgain / (numWouldTakeAgain + numWouldNotTakeAgain));
    return stats;
}
```

+ limiting time complexities to O(nlogn)
+ taking advantage of hashes for time efficiency

```javascript
groupLikes(profReviews, likes) {
    let groupedLikes = {}
    for (let i = 0; i < profReviews.length; i++) {
        if (!groupedLikes[profReviews[i].id]) {
            groupedLikes[profReviews[i].id] = []
        }
    }
    for (let i = 0; i < likes.length; i++) {
        groupedLikes[likes[i].review_id]?.push(likes[i])
    }

    return groupedLikes
}

<ProfReviewShow 
    key={index} 
    profReview={profReview} 
    createLike={createLike}
    deleteLike={deleteLike}
    currentUser={currentUser}
    prof={prof}
    showLikes={true}
    history={history}
    likes={groupedLikes[profReview.id]}/>)
```
