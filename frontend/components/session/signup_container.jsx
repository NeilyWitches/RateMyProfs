import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/session_actions';
import Signup from './signup';

const mSTP = (state) => {
    return {
        signup_errors: state.errors.signup,
    };
};

const mDTP = dispatch => ({
    createUser: formUser => dispatch(createUser(formUser)),
});

export default connect(mSTP, mDTP)(Signup);