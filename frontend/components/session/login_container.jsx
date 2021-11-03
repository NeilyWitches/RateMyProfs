import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';

const mSTP = ({ errors }) => {
    return {
        login_errors: errors.session,
    };
};

const mDTP = dispatch => {
    return {
        login: formUser => dispatch(login(formUser)),
    };
};

export default connect(mSTP, mDTP)(Login);