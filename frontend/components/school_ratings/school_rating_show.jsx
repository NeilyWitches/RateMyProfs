import React from 'react';
import SchoolRatingLikes from '../school_rating_likes/school_rating_likes';

class SchoolRatingShow extends React.Component {
    constructor(props) {
        super(props);
    }

    getCategoryRatings(schoolRating) {
        let categories = Object.keys(schoolRating)
        categories.splice(-4,4)
        let nums = Object.values(schoolRating)
        let ratings = [];

        for (let i = 0; i < categories.length; i++) {
            ratings.push({name: categories[i].toUpperCase(), num: nums[i]})
        }

        return ratings
    }

    getBackgroundColor(qual) {
        if (qual < 3) {
            return 'rgb(255, 156, 156)'
        } else if (qual >= 4) {
            return '#68ffbe'
        } else {
            return 'rgb(255, 254, 104)'
        }
    }

    render() {
        const {schoolRating, history, schoolRatingLikes} = this.props;

        let categoryRatings = this.getCategoryRatings(schoolRating)

        return (
            <div className='school-rating-index-school-summary'>
                <div className='top-profs'>
                    <div className='top-profs-header'>
                        <div className='school-rating-show-header'>RATING</div>
                    </div>
                    <div className='top-profs-header'>
                        <div className='school-rating-show-date'>{schoolRating.updatedOn}</div>
                    </div>
                    <div className='school-rating-index-avg-rating-each-category'>
                            {categoryRatings.map((rating) => 
                            <div className='school-rating-index-avg-prof-ratings' key={rating.name}>
                                <div 
                                    className='school-rating-index-avg-prof-rating-num'
                                    style={{backgroundColor: this.getBackgroundColor(rating.num)}}>
                                    {rating.num ? rating.num : 'N/A'}
                                </div>
                                <div className='school-rating-index-avg-prof-rating-label'>{rating.name}</div>
                            </div>)}
                    </div>
                </div>
                <div className='top-profs'>
                    <div className='top-profs-header'>
                        <div className='school-rating-show-header'>COMMENT</div>
                    </div>
                    <div className='school-rating-show-comment'>{schoolRating.comment}</div>
                    <SchoolRatingLikes
                        createSchoolRatingLike={this.props.createSchoolRatingLike}
                        deleteSchoolRatingLike={this.props.deleteSchoolRatingLike}
                        currentUser={this.props.currentUser}
                        schoolRating={schoolRating}
                        history={history}
                        schoolRatingLikes={schoolRatingLikes}/>
                </div>
            </div>
        )
    }
}

export default SchoolRatingShow