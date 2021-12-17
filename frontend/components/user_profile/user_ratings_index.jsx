import React from 'react';
import ProfReviewShow from '../prof_reviews/prof_review_show';

class UserRatingsIndex extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.requestUser(this.props.match.params.userId)
    };

    render() {
        const { user, profReviews, deleteProfReview } = this.props;
        if (!user) return null;
        return (
            <div id='user-ratings-index'>
                <div className='account-header'>Hey, {user.first_name}</div>
                <ul>
                    {
                        profReviews.map((profReview, index) =>
                        <div key={index}>
                            <ProfReviewShow 
                            profReview={profReview} 
                            mayEdit={true}
                            userId={this.props.match.params.userId}
                            mayDelete={true}
                            deleteProfReview={deleteProfReview}/>
                        </div>)
                    }
                </ul>
            </div>
        )
    }
}

export default UserRatingsIndex;