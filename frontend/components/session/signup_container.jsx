import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/session_actions';
import Signup from './signup';

const mSTP = ({ errors }) => {
    return {
        signup_errors: errors.session,
    };
};

const mDTP = dispatch => ({
    createUser: formUser => dispatch(createUser(formUser)),
});

export default connect(mSTP, mDTP)(Signup);