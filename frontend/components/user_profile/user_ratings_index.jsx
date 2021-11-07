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
                        profReviews.map((profReview, index) => <ProfReviewShow key={index} profReview={profReview}/>)
                    }
                </ul>
                {/* <Link to={`/profReviews/edit/${this.props.user.id}`}>Edit</Link> */}
            </div>
        )
    }
}

export default UserRatingsIndex;