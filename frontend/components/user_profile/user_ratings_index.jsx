import React from 'react';
import { Link } from 'react-router-dom';
import ProfReviewShow from '../prof_reviews/prof_review_show';

class UserRatingsIndex extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.requestUser(this.props.match.params.userId)
    };

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId){
            this.props.requestUser(this.props.match.params.userId)
        }
    }

    render() {
        if (!this.props.user) return null;
        const profReviews = Object.values(this.props.user.prof_reviews);
        return (
            <div id='user-ratings-index'>
                <ul>
                    {
                        profReviews.map((profReview, index) =>
                        <div key={index}>
                            <ProfReviewShow profReview={profReview}/>
                            <Link to={`/profReviews/edit/${profReview.id}/${this.props.match.params.userId}`}>Edit</Link>
                        </div>)
                    }
                </ul>
            </div>
        )
    }
}

export default UserRatingsIndex;