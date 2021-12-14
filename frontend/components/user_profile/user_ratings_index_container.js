import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import UserRatingsIndex from './user_ratings_index';
import { clearErrors } from '../../actions/clear_errors';
import { deleteProfReview } from '../../actions/prof_review_actions';


const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        profReviews: state.entities.users[ownProps.match.params.userId]?.prof_reviews
    }
};

const mDTP = dispatch => ({
    requestUser: (userId) => dispatch(requestUser(userId)),
    clearErrors: () => dispatch(clearErrors()),
    deleteProfReview: profReviewId => dispatch(deleteProfReview(profReviewId)),
});

export default connect(mSTP, mDTP)(UserRatingsIndex);