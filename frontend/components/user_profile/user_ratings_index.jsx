import React from 'react';
import ProfReviewShow from '../prof_reviews/prof_review_show';
import AccountLinks from './account_links';

class UserRatingsIndex extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.requestUser(this.props.match.params.userId)
    };

    render() {
        const { user, profReviews, deleteProfReview, profs, schools } = this.props;

        if (profReviews.length === 0) {
            return (
                <div className='page'>
                    <div className='account-header'>Hey, {user?.first_name}</div>
                    <AccountLinks 
                    location={this.props.match.path}
                    user={user}/>
                    <div id='no-authored-reviews'>You haven’t rated any professors yet.</div>
                    <div id='no-authored-reviews-subtext'>Find your favorite professor and let them know what a difference they’ve made!</div>
                </div>
            )
        }
        return (
            <div id='user-ratings-index'>
                <div className='account-header'>Hey, {user?.first_name}</div>
                <AccountLinks 
                location={this.props.match.path}
                user={user}/>
                <ul>
                    {
                        profReviews.map((profReview, index) =>
                        <div key={index}>
                            <ProfReviewShow 
                            profReview={profReview}
                            mayEdit={true}
                            userId={this.props.match.params.userId}
                            deleteProfReview={deleteProfReview}
                            profWrittenAbout={profs[profReview.prof_id]}
                            school={schools[profs[profReview.prof_id].school_id]}/>
                        </div>)
                    }
                </ul>
            </div>
        )
    }
}

export default UserRatingsIndex;