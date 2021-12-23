import React from 'react';
import {Link} from 'react-router-dom';
import AccountLinks from './account_links';

class ProfileInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestSchool(this.props.user.school_id)
    }
 
    render() {
        const { user, school } = this.props;

        return (
            <div className='page'>
                <div className='account-header'>Hey, {user.first_name}</div>
                <AccountLinks 
                location={this.props.match.path}
                user={user}/>
                <Link 
                    to={`/account/profile/edit/${user.id}`} 
                    id='edit-user-profile-button'
                    className='link'>
                    <i id='edit-icon' className="fas fa-pencil-alt"></i>Edit
                </Link>
                <div className='profile-info'>
                    <div className='profile-info-labels'>
                        <div className='profile-info-label'>Name</div>
                        <div className='profile-info-label'>School</div>
                    </div>
                    <div className='profile-info-infos'>
                        <div className='profile-info-info'>{user.first_name}</div>
                        <div className='profile-info-info'>{school[user.school_id]?.name}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileInfo