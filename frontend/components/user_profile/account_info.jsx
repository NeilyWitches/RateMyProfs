import React from 'react';
import {Link} from 'react-router-dom'

class AccountInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { user } = this.props;

        return (
            <div className='page'>
                <div className='account-header'>Hey, {user.first_name}</div>
                <div id='account-info'>
                    <div id='account-info-label'>Email</div>
                    <div id='account-info-field'>{user.email}</div>
                    <Link 
                        to={`/account/edit/${user.id}`} 
                        id='account-info-edit'>
                        <i id='edit-icon' className="fas fa-pencil-alt"></i>Edit
                    </Link>
                </div>
            </div>
        )
    }
}

export default AccountInfo;