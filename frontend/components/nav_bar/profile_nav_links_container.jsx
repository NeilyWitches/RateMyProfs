import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'

class ProfileNavLinks extends React.Component {
    constructor(props) {
        super(props);

        this.clickMyRatings = this.clickMyRatings.bind(this);
        this.clickAccountSettings = this.clickAccountSettings.bind(this);
        this.clickSavedProfs = this.clickSavedProfs.bind(this);
    };

    clickMyRatings() {
        let path = `/account/ratings/${this.props.current_user.id}`;
        this.props.history.push(path);
    }

    clickAccountSettings() {
        let path = `/account/${this.props.current_user.id}`; 
        this.props.history.push(path);
    }

    clickSavedProfs() {
        let path = `/account/profs/${this.props.current_user.id}`; 
        this.props.history.push(path);
    }

    render() {
        if (this.props.title === 'Logout') {
            return (
                <li><button className='profile-nav-link' onClick={this.props.logout}>{this.props.title}</button></li>
            )
        } else if (this.props.title === 'My Ratings') {
            return (
                <li><button className='profile-nav-link' onClick={this.clickMyRatings}>{this.props.title}</button></li>
            )
        } else if (this.props.title === 'Account Settings') {
            return (
                <li><button className='profile-nav-link' onClick={this.clickAccountSettings}>{this.props.title}</button></li>
            )
        }
        else if (this.props.title === "Saved Profs") {
            return (
                <li><button className='profile-nav-link' onClick={this.clickSavedProfs}>{this.props.title}</button></li>
            )
        }
        else {
            return (
                <li><button className='profile-nav-link'>{this.props.title}</button></li>
            )
        }
    };
};

const mSTP = state => {
    return {
        current_user: state.session.current_user,
    };
};

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
};

export default connect(mSTP, mDTP)(ProfileNavLinks);