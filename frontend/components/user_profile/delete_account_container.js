import { connect } from 'react-redux';
import { deleteUser } from '../../actions/session_actions'
import DeleteAccount from './delete_account';

const mSTP = (state) => {
    return {
        user: state.session.current_user,
        userErrors: state.errors.signup
    }
};

const mDTP = dispatch => ({
    deleteUser: user => dispatch(deleteUser(user)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(DeleteAccount)