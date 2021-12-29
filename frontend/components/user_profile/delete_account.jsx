import React from 'react';
import {Link} from 'react-router-dom';
import AccountLinks from './account_links';

class DeleteAccount extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.user.id,
            password: '',
        }

        this.deleteAccount = this.deleteAccount.bind(this)
        this.update = this.update.bind(this)
        this.clickCancel = this.clickCancel.bind(this)
    }

    clickCancel() {
        this.props.history.goBack()
    }

    deleteAccount(e) {
        e.preventDefault()
        this.props.deleteUser(this.state)
        .then(() => this.props.history.push(`/signup`));
    }

    update(e) {
        this.setState({password: e.currentTarget.value})
    }

    renderErrors() {
        return (
            <ul>
                {this.props.userErrors.map((error, i) => (
                    <li key={`error-${i}`} className='error'>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        const {user} = this.props;
        return (
            <form className='page' onSubmit={this.deleteAccount}>
                <div className="account-header">Hey, {user.first_name}</div>
                <AccountLinks 
                location={this.props.match.path}
                user={user}/>
                <div id='delete-account-header'>Are you sure you want to delete your account?</div>
                <ul id='delete-account-list'>
                    <li>Deleting your account is permanent</li>
                    <li>The ratings you've already submitted will not be deleted</li>
                    <li>You will no longer be able to edit your ratings</li>
                </ul>
                <div className='delete-account-row'>Delete this account:</div>
                <div className='delete-account-row'>
                    Enter your password to confirm
                    <input 
                        type='password'
                        id='delete-account-password'
                        value={this.state.password}
                        onChange={this.update}>
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
                        <div className='edit-user-form-cancel link cancel' onClick={this.clickCancel}>Cancel</div>
                    </div>
                </div>
                {this.renderErrors()}
            </form>
        )
    }
}

export default DeleteAccount;