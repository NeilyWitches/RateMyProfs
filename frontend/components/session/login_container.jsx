import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';

// const mDTP = dispatch => ({
//     login: formUser => dispatch(login(formUser)),
// });

const mDTP = dispatch => {
    return {
        login: formUser => dispatch(login(formUser)),
    };
};

export default connect(null, mDTP)(Login);