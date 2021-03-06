import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import UserRatingsIndex from './user_ratings_index';
import { deleteProfReview } from '../../actions/prof_review_actions';


const mSTP = (state, ownProps) => {
    return {
        user: state.session.current_user,
        profReviews: Object.values(state.entities.prof_reviews),
        profs: state.entities.profs,
        schools: state.entities.schools
    }
};

const mDTP = dispatch => ({
    requestUser: (userId) => dispatch(requestUser(userId)),
    deleteProfReview: profReviewId => dispatch(deleteProfReview(profReviewId)),
});

export default connect(mSTP, mDTP)(UserRatingsIndex);