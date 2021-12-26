import React from 'react';

class SchoolShow extends React.Component {
    constructor(props) {
        super(props);

        // this.clickSchool = this.clickSchool.bind(this);
    }

    // clickSchool() {
    //     let path = `/school/${this.props.school.id}`;
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

    styleQuality(qual) {
        if (qual < 3) {
            return 'rgb(255, 156, 156)'
        } else if (qual >= 4) {
            return '#68ffbe'
        } else {
            return 'rgb(255, 254, 104)'
        }
    }

    render() {
        const {school, schoolRatings} = this.props;

        if (!schoolRatings) return null

        let numRatings = schoolRatings.length
        let avgQual = this.getAvgQual(schoolRatings, numRatings)

        return (
            <div className='school-show'>
                <div className='school-show-rating-summary'>
                    <div id='school-show-quality-label'>QUALITY</div>
                    <div id='school-show-quality' style={{backgroundColor: this.styleQuality(avgQual)}}>{numRatings === 0 ? "N/A" : avgQual.toFixed(1)}</div>
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