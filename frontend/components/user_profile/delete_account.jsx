import React from 'react';
import {Link} from 'react-router-dom'

class DeleteAccount extends React.Component {
    constructor(props) {
        super(props)

        
    }

    render() {
        const {user} = this.props;
        return (
            <div className='page'>
                <div className="account-header">Hey, {user.first_name}</div>
                <div id='delete-account-header'>Are you sure you want to delete your account?</div>
                <ul id='delete-account-list'>
                    <li>Deleting your account is permanent</li>
                    <li>The ratings you've already submited will not be deleted</li>
                    <li>You will no longer be able to edit your ratings</li>
                </ul>
                <div className='delete-account-row'>Delete this account:</div>
                <div className='delete-account-row'>
                    Enter your password to confirm
                    <input 
                        type='password'
                        id='delete-account-password'>
                    </input>
                </div>
                <div id='delete-account-final-row'>
                    <div id='delete-account-final-row-contents'>
                        <input
                            id='delete-account-button' 
                            type='submit'
                            value='Delete Account'
                            className='edit-user-button'>
                        </input>
                        <Link 
                            className='edit-user-form-cancel link'
                            to={`/account/${user.id}`}>Cancel
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteAccount;