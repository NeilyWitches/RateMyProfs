import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/session_actions';
import Signup from './signup';

const mDTP = dispatch => ({
    createUser: formUser => dispatch(createUser(formUser)),
});

export default connect(null, mDTP)(Signup);