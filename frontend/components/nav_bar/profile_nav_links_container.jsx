import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'

class ProfileNavLinks extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <li><button className='profile-nav-link' onClick={this.props.logout}>{this.props.title}</button></li>
        )
    };
};

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
};

export default connect(null, mDTP)(ProfileNavLinks);