import { connect } from 'react-redux';
import { clearErrors } from '../../actions/clear_errors';
import { editEmail, editPassword } from '../../actions/session_actions'
import EditUserForm from './edit_user_form';

const mSTP = (state) => {
    return {
        user: state.session.current_user,
        changeEmailErrors: state.errors.change_email,
        changePasswordErrors: state.errors.change_password,
    }
};

const mDTP = dispatch => ({
    updateEmail: user => dispatch(editEmail(user)),
    clearErrors: () => dispatch(clearErrors()),
    updatePassword: user => dispatch(editPassword(user))
});

export default connect(mSTP, mDTP)(EditUserForm)