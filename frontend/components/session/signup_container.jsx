import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/session_actions';
import Signup from './signup';
import { clearErrors } from '../../actions/clear_errors';

const mSTP = (state) => {
    return {
        signup_errors: state.errors.signup,
    };
};

const mDTP = dispatch => ({
    createUser: formUser => dispatch(createUser(formUser)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(Signup);