import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import UserRatingsIndex from './user_ratings_index';

const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
    }
};

const mDTP = dispatch => ({
    requestUser: (userId) => dispatch(requestUser(userId)),
});

export default connect(mSTP, mDTP)(UserRatingsIndex);