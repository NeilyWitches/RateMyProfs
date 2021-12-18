import { connect } from 'react-redux';
import { clearErrors } from '../../actions/clear_errors';
import { editUser} from '../../actions/session_actions'
import EditUserForm from './edit_user_form';

const mSTP = (state) => {
    return {
        user: state.session.current_user,
        userErrors: state.errors.signup
    }
};

const mDTP = dispatch => ({
    updateUser: user => dispatch(editUser(user)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(EditUserForm)