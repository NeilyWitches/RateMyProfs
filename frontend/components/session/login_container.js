import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';
import { clearErrors } from '../../actions/clear_errors';

const mSTP = (state) => {
    return {
        login_errors: state.errors.login,
    };
};

const mDTP = dispatch => {
    return {
        login: formUser => dispatch(login(formUser)),
        clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(mSTP, mDTP)(Login);