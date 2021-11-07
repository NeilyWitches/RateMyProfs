import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import UserRatingsIndex from './user_ratings_index';

const mSTP = (state, ownProps) => {
    return {
        profReviews: Object.values(state.entities.profReviews),
    }
};

const mDTP = dispatch => ({
    requestUser: (userId) => dispatch(requestUser(userId)),
});

export default connect(mSTP, mDTP)(UserRatingsIndex);