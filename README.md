# Rate My PRofs

[Live Link](https://rate-my-profs.herokuapp.com/#/)
## A clone of [Rate My Professors](https://www.ratemyprofessors.com/)

<img width="1440" alt="Screen Shot 2021-11-12 at 9 20 51 AM" src="https://user-images.githubusercontent.com/59269773/141481889-ba7b6aac-1b4e-4bef-90f3-d14d8c2b7975.png">

### Summary ###
Rate My Profs is a pixel perfect clone of Rate My Professors save some UI design choices I had made. It is a site where users go to review professors  and schools in order to better inform prospecting students.

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

### CRUD

+ CREATION of profs, prof reviews, and user accounts.
+ READING of said reviews and summaries of profs.
+ UPDATING reviews depending on user credentials.
+ DELETION of the same.

### Challenges

![rmp selecting tags](https://user-images.githubusercontent.com/59269773/141484821-2839028e-d8a0-4d0d-b936-8f0a8ba015bb.gif)

- implemented a constraint on the number of tags that may be clicked making sure to allow the user to still unclick a tag (if they change their mind), but not click a new tag. 
- designed the buttons to trigger a boolean value on click to dynamically style
- developed a way to convert the combination of boolean values into the approprate string values. 

```javascript
<div id='prof-review-form-tags'>
    {
        this.tags.map((tag, index) => <input
            key={index} type='button'
            style={{ backgroundColor: this.tagStyles[index] }}
            onClick={this.changeColor(index)}
            value={tag} />)
    }
</div>
```

<img width="1113" alt="rmp top tags" src="https://user-images.githubusercontent.com/59269773/141486258-8389a853-09c2-4964-94a1-5e5ae64e22ad.png">

- built the algorithm for the **top tags** feature by creating a hash of the the counts of all the tags of one "prof.", converting into an array, and taking the transpose
- handled extreme cases and exceptions by limiting tags to 5, removing repeats, and making sure that if a prof had no tags or under 5, that nothing was rendered on the screen rather than a blank div. 

```javascript
let tagsCountArray = [];
tagsCountArray.push(Object.keys(tags_count), Object.values(tags_count))
let tagsCountTranspose = [];
for (let i = 0; i < tagsCountArray[0].length; i++) {
    tagsCountTranspose.push([tagsCountArray[0][i], tagsCountArray[1][i]])
}
let topTags = [];
let sortedCounts = Object.values(tags_count).sort().reverse();
for (let i = 0; i < sortedCounts.length; i++) {
    for (let j = 0; j < tagsCountTranspose.length; j++) {
        if (tagsCountTranspose[j][1] === sortedCounts[i] && topTags.length < 5 && sortedCounts[i] && !topTags.includes(tagsCountTranspose[j][0])) {
            topTags.push(tagsCountTranspose[j][0])
        } 
    }
}
return topTags;
```

<img width="1090" alt="prof index rmp" src="https://user-images.githubusercontent.com/59269773/141487870-e0c7be22-c113-4596-8200-4e2f8c945429.png">

- calcuated and rendered a statistical summary of all reviews written about a prof by acquring information about each prof's reviews on each handling the exception that a user may create a new prof without writing any reviews for that prof for a more user friendly experience by implementing a check on the length of reviews and rendering the appropriate response accordingly

```javascript
getAvgQual(profReviews) {
    let sum = 0;
    if (profReviews.length === 0) return "N/A"
    for(let i = 0; i < profReviews.length; i++){
        sum += profReviews[i].quality
    }
    return (sum / profReviews.length).toFixed(2);
}
```
