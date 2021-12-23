import React from 'react';
import {Link} from 'react-router-dom';

class AccountLinks extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render() {
        const {user, location} = this.props;
        console.log(location)

        return (
            <div className='account-links'>
                <Link 
                    className='link account-link'
                    to={`/account/profile/${user.id}`}
                    // style={makeBoldOrNah('/account/profile/:userId')}
                    style={location === `/account/profile/:userId` || location === '/account/profile/edit/:userId' ? {fontWeight: '700'} : null }
                    >Profile
                </Link>
                <Link 
                    className='link account-link'
                    to={`/account/${user.id}`}
                    style={location === `/account/:userId` || location === '/account/edit/:userId' ? {fontWeight: '700'} : null }
                    >Account Settings
                </Link>
                <Link 
                    className='link account-link'
                    to={`/account/ratings/${user.id}`}
                    style={location === `/account/ratings/:userId` ? {fontWeight: '700'} : null }
                    >Ratings
                </Link>
                <Link 
                    className='link account-link'
                    to={`/account/profs/${user.id}`}
                    style={location === '/account/profs/:userId' ? {fontWeight: '700'} : null }
                    >Saved Profs
                </Link>
            </div>
        )
    }
}

export default AccountLinks;