import React from 'react';

class SchoolShow extends React.Component {
    constructor(props) {
        super(props);

        // this.clickSchool = this.clickSchool.bind(this);
    }

    // clickSchool(school) {
    //     let path = `/school/${school.id}`;
    //     return () => this.props.history.push(path);    
    // }

    getAvgQual(schoolRatings, numRatings) {
        let avgRatingSum = 0;
        for (let i = 0; i < numRatings; i++) {
            let ratingSum = 0;
            let values = Object.values(schoolRatings[i])
            for (let j = 1; j < 11; j++) {
                ratingSum += values[j]
            }
            avgRatingSum += (ratingSum / 10)
        }
        return avgRatingSum / numRatings
    }

    render() {
        const {school, schoolRatings} = this.props;

        let numRatings = schoolRatings.length
        let avgQual = this.getAvgQual(schoolRatings, numRatings)

        return (
            <div className='school-show'>
                <div className='school-show-rating-summary'>
                    <div id='school-show-quality-label'>QUALITY</div>
                    <div id='school-show-quality'>{numRatings === 0 ? "N/A" : avgQual.toFixed(1)}</div>
                    <div id='school-show-num-ratings'>{numRatings} Ratings</div>
                </div>
                <div className='school-show-name'>
                    {school.name}
                </div>
                <div className='school-show-location'>
                    {school.city}, {school.state}
                </div>
            </div>
        )
    }
}

export default SchoolShow