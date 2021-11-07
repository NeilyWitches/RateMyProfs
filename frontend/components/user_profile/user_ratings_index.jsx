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
        if (!this.props.profReviews) return null;
        const {profReviews} = this.props;
        return (
            <div id='user-ratings-index'>
                <ul>
                    {
                        profReviews.map((profReview, index) =>
                        <div>
                            <ProfReviewShow key={index} profReview={profReview}/>
                            <Link key={index} to={`/profReviews/edit/${profReview.id}`}>Edit</Link>
                        </div>)
                    }
                </ul>
            </div>
        )
    }
}

export default UserRatingsIndex;