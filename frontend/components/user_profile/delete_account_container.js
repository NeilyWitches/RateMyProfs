import { connect } from 'react-redux';
import { deleteUser } from '../../actions/session_actions'
import DeleteAccount from './delete_account';

const mSTP = (state) => {
    return {
        user: state.session.current_user,
    }
};

const mDTP = dispatch => ({
    deleteUser: userId => dispatch(deleteUser(userId)),
})

export default connect(mSTP, mDTP)(DeleteAccount)