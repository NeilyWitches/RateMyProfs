import React from 'react';
import { Link } from 'react-router-dom';
import { deleteProfReview } from '../../actions/prof_review_actions';
import ProfReviewShow from '../prof_reviews/prof_review_show';

class UserRatingsIndex extends React.Component {
    constructor(props) {
        super(props)

        this.clickDelete = this.clickDelete.bind(this);

        this.state = {
            profReviews: [],
        }
    };

    componentDidMount() {
        this.props.requestUser(this.props.match.params.userId)
    };

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.requestUser(this.props.match.params.userId)
        }
        if (prevProps?.prof_reviews !== this.props.prof_reviews) {
            this.props.requestUser(this.props.match.params.userId)
        }
    }

    clickDelete(profReviewId) {
        return () => {
            this.props.deleteProfReview(profReviewId)
        }
    }

    render() {
        if (!this.props.user) return null;
        const profReviews = Object.values(this.props.user.prof_reviews)

        return (
            <div id='user-ratings-index'>
                <div id='user-ratings-index-header'>Hey, {this.props.user.first_name}</div>
                <ul>
                    {
                        profReviews.map((profReview, index) =>
                        <div key={index}>
                            <ProfReviewShow profReview={profReview} 
                            mayEdit={true}
                            userId={this.props.match.params.userId}
                            mayDelete={true}
                            clickDelete={this.clickDelete}/>
                        </div>)
                    }
                </ul>
            </div>
        )
    }
}

export default UserRatingsIndex;