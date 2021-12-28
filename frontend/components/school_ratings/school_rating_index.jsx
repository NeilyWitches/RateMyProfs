import React from 'react';
import {Link} from 'react-router-dom';
import SchoolRatingShow from './school_rating_show';

class SchoolRatingIndex extends React.Component {
    constructor(props) {
        super(props);

        this.clickRateSchool = this.clickRateSchool.bind(this)
        this.clickAllProfs = this.clickAllProfs.bind(this);
    }

    componentDidMount() {
        this.props.requestSchoolRatings(this.props.match.params.schoolId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.schoolRatings !== this.props.schoolRatings){
            this.categories = Object.keys(this.props.schoolRatings[0])
            this.avgRatings = this.getAvgRatings(this.props.schoolRatings, this.categories);
            this.overallRating = this.getOverallRating(this.avgRatings)
            this.forceUpdate()
        }
    }

    getOverallRating(avgRatings) {
        let sum = 0
        for (let i = 0; i < avgRatings.length; i++) {
            sum += avgRatings[i].num
        }
        return sum / avgRatings.length
    }

    groupLikes(schoolRatings, likes) {
        let groupedLikes = {}
        for (let i = 0; i < schoolRatings.length; i++) {
            if (!groupedLikes[schoolRatings[i].id]) {
                groupedLikes[schoolRatings[i].id] = []
            }
        }
        for (let i = 0; i < likes.length; i++) {
            groupedLikes[likes[i].school_rating_id]?.push(likes[i])
        }
        return groupedLikes
    }

    clickRateSchool() {
        let path = `/schoolRatings/new/${this.props.school.id}`
        this.props.history.push(path)
    }

    getTopProfs(profs, groupedProfReviews) {
        let profsArray = [];
        let sum = 0
        for (let i = 0; i < profs.length; i++) {
            let profObject = {}
            profObject['id'] = profs[i].id;
            profObject["firstName"] = profs[i].first_name;
            profObject["lastName"] = profs[i].last_name;
            let numReviews = groupedProfReviews[profs[i]?.id]?.length
            profObject['numReviews'] = numReviews
            let avgQual = this.getAvgQual(groupedProfReviews[profs[i]?.id])
            profObject['avgQual'] = avgQual
            sum += avgQual
            profObject['score'] = numReviews * avgQual
            profsArray.push(profObject)
        }

        return [profsArray.sort((a, b) => (a.score < b.score) ? 1 : -1).slice(0, 3), sum / profs.length]
    }

    getAvgQual(profReviews) {
        let sum = 0
        for (let i = 0; i < profReviews?.length; i++) {
            sum += profReviews[i]?.quality
        }
        return sum / profReviews?.length;
    }

    groupReviews(profReviews) {
        let groupedReviews = {}
        for (let i = 0; i < profReviews.length; i++) {
            if (!groupedReviews[profReviews[i].prof_id]) {
                groupedReviews[profReviews[i].prof_id] = []   
            }
            groupedReviews[profReviews[i].prof_id].push(profReviews[i])
        }
        return groupedReviews
    }

    clickAllProfs() {
        let path = `/profs/${this.props.school.name}/ `
        this.props.history.push(path)
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

    getAvgRatings(schoolRatings, categories) {
        let numRatings = schoolRatings.length;
        categories.splice(-4, 4)
        let avgRatings = [];

        for (let i = 0; i < categories.length; i++) {
            avgRatings.push({name: categories[i].toUpperCase(), num: 0})
        }

        for (let i = 0; i < avgRatings.length; i++) {
            for (let j = 0; j < numRatings; j++) {
                schoolRatings[j][categories[i]]
                avgRatings[i].num += schoolRatings[j][categories[i]]
            }
            avgRatings[i].num /= numRatings
        }

        return avgRatings
    }

    render() {
        const {school, profs, profReviews, schoolRatings, schoolRatingLikes, createSchoolRatingLike, deleteSchoolRatingLike, currentUser, history} = this.props;

        if (!school || !profs || !profReviews) return null

        let groupedReviews = this.groupReviews(profReviews);
        let topProfs = this.getTopProfs(profs, groupedReviews);
        let groupedLikes = this.groupLikes(schoolRatings, schoolRatingLikes)
        
        return (
            <div className='page'>
                <div className='school-rating-index-header'>{school.name}</div>
                <div className='school-rating-index-school-location'>{school.city}, {school.state}</div>
                <a 
                    href={`${school.website}`} 
                    target="_blank" rel="noreferrer noopener"
                    className='school-website'>
                    WEBSITE <i className="fas fa-external-link-alt"></i>
                </a>
                <button id='review-prof-button' 
                onClick={this.clickRateSchool}
                >Rate this campus</button>
                <div className='school-rating-index-school-summary'>
                    <div className='top-profs' id='top-profs'>
                        <div className='top-profs-header'>
                            <div className='top-profs-label'>Top Profs</div>
                            <button 
                                className='school-rating-index-all-profs'
                                onClick={this.clickAllProfs}>
                                VIEW ALL PROFS
                            </button>
                        </div>
                        <ul className='top-profs-ul'>
                            {topProfs[0].map((prof) => <li key={prof.id} className='top-profs-li'>
                                <div className='top-prof-name-num-reviews'>
                                    <Link 
                                        className='top-prof-name'
                                        to={`/profs/${prof.id}`}>{prof.lastName}, {prof.firstName}</Link>
                                    <div className='top-profs-num-reviews'>{prof.numReviews} REVIEWS</div>
                                </div>
                                <div 
                                    className='top-prof-avg-qual'
                                    style={{backgroundColor: this.getBackgroundColor(prof.avgQual)}}>{!prof?.avgQual ? 'N/A' : prof.avgQual.toFixed(1)}</div>
                            </li>)}
                        </ul>
                        <div className='school-rating-index-avg-prof-rating'>
                            <div className='school-rating-index-avg-prof-rating-num'>{topProfs[1] ? topProfs[1].toFixed(2) : 'N/A'}</div>
                            <div className='school-rating-index-avg-prof-rating-label'>AVERAGE PROF RATING</div>
                        </div>
                    </div>
                    <div className='top-profs'>
                        <div className='top-profs-header'>
                            <div className='top-profs-label'>How This School Stacks Up</div>
                        </div>
                        <div className='school-rating-index-avg-prof-rating'>
                            <div className='top-prof-avg-qual'>{this.overallRating ? this.overallRating.toFixed(2) : 'N/A'}</div>
                            <div className='school-rating-index-avg-prof-rating-label'>OVERALL QUALITY RATING</div>
                        </div>
                        <div className='school-rating-index-avg-rating-each-category'>
                            {this.avgRatings?.map((rating) => 
                            <div className='school-rating-index-avg-prof-ratings' key={rating.name}>
                                <div 
                                    className='school-rating-index-avg-prof-rating-num'
                                    style={{backgroundColor: this.getBackgroundColor(rating.num)}}>
                                    {rating.num ? rating.num.toFixed(1) : 'N/A'}
                                </div>
                                <div className='school-rating-index-avg-prof-rating-label'>{rating.name}</div>
                            </div>)}
                        </div>
                    </div>
                </div>
                <div id='prof-review-index-label'>{schoolRatings.length} School Ratings</div>
                <ul>
                    {schoolRatings.map((schoolRating, index) => 
                    <SchoolRatingShow
                        key={index}
                        schoolRating={schoolRating}
                        schoolRatingLikes={groupedLikes[schoolRating.id]}
                        createSchoolRatingLike={createSchoolRatingLike}
                        deleteSchoolRatingLike={deleteSchoolRatingLike}
                        currentUser={currentUser}
                        history={history}/>)}
                </ul>
            </div>
        )
    }
}

export default SchoolRatingIndex;