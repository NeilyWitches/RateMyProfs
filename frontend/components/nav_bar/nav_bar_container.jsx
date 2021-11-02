import React from 'react';
import {connect} from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';


const mSTP = state => {
    return {
        current_user: state.session.current_user,
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(NavBar);