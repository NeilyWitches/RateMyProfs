import React from "react";
import {Link} from 'react-router-dom';
import AccountLinks from './account_links';

class EditUserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emailChange: {
                id: this.props.user.id,
                email: this.props.user.email,
                password: '',
                updatingEmail: true,
            },
            passwordChange: {
                id: this.props.user.id,
                email: this.props.user.email,
                newPassword: '',
                oldPassword: '',
                updatingPassword: true,
            }
        }

        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.clickCancel = this.clickCancel.bind(this);
    };

    clickCancel() {
        this.props.history.goBack()
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    updateEmailForm(field) {
        let emailChange = {...this.state.emailChange}
        return e => {
            emailChange[field] = e.currentTarget.value;
            this.setState({emailChange})
        }
    }

    updatePasswordForm(field) {
        let passwordChange = {...this.state.passwordChange}
        return e => {
            passwordChange[field] = e.currentTarget.value;
            this.setState({passwordChange})
        }
    }

    changeEmail(e) {
        e.preventDefault();
        this.props.updateEmail(this.state.emailChange)
        .then(() => this.props.history.push(`/account/${this.props.user.id}`));
    }

    changePassword(e) {
        e.preventDefault();
        this.props.updatePassword(this.state.passwordChange)
        .then(() => this.props.history.push(`/account/${this.props.user.id}`));
    }

    render() {
        const {user} = this.props;
        return (
            <div className="page">
                <div className="account-header">Hey, {user.first_name}</div>
                <AccountLinks 
                location={this.props.match.path}
                user={user}/>
                <form onSubmit={this.changeEmail} className='edit-user-form-proper'>
                    <div className='edit-user-form-header'>Update Email</div>
                    <div className='edit-user-form-input-row'>
                        <div className='edit-user-form-label'>New Email</div>
                        <input 
                            type='text'
                            value={this.state.emailChange.email}
                            onChange={this.updateEmailForm('email')}
                            className="edit-user-form-input">
                        </input>
                    {this.props.changeEmailErrors.includes("Email cannot be blank") ? <div className='prof-form-school-name-error error'>Email cannot be blank</div> : null }
                    </div>
                    <div className='edit-user-form-input-row'>
                        <div className='edit-user-form-label'>Password</div>
                        <input 
                            type='password'
                            value={this.state.emailChange.password}
                            onChange={this.updateEmailForm('password')}
                            className="edit-user-form-input">
                        </input>
                        {this.props.changeEmailErrors.includes("Incorrect password") ? <div className='prof-form-school-name-error error'>Incorrect password</div> : null }
                    </div>
                    <div className='edit-user-form-submit-cancel-row'>
                        <div className='edit-user-form-submit-cancel-col'>
                            <input 
                                type='submit' 
                                className='edit-user-form-submit edit-user-button' 
                                value='Update Email'>
                            </input>
                            <div className="edit-user-form-cancel link cancel" onClick={this.clickCancel}>Cancel</div>
                        </div>
                    </div>
                    <div className='edit-user-form-border'></div>
                </form>
                <form onSubmit={this.changePassword} className='edit-user-form-proper'>
                    <div className="edit-user-form-header">Update Password</div>
                    <div className="edit-user-form-input-row">
                        <div className="edit-user-form-label">Old Password</div>
                        <input
                            type='password'
                            value={this.state.passwordChange.oldPassword}
                            onChange={this.updatePasswordForm('oldPassword')}
                            className="edit-user-form-input">
                        </input>
                        {this.props.changePasswordErrors.includes("Incorrect passowrd") ? <div className='prof-form-school-name-error error'>Incorrect password</div> : null }
                    </div>
                    <div className="edit-user-form-input-row">
                        <div className="edit-user-form-label">New Password</div>
                        <input
                            type='password'
                            value={this.state.passwordChange.newPassword}
                            onChange={this.updatePasswordForm('newPassword')}
                            className="edit-user-form-input">
                        </input>
                        {this.props.changePasswordErrors.includes("Password is too short, must be at least 6 characters") ? <div className='prof-form-school-name-error error'>Password is too short, must be at least 6 characters</div> : null }
                    </div>
                    <div className='edit-user-form-submit-cancel-row'>
                        <div className='edit-user-form-submit-cancel-col'>
                            <input 
                                type='submit' 
                                className='edit-user-form-submit edit-user-button' 
                                value='Update Password'>
                            </input>
                            <div className="edit-user-form-cancel link cancel" onClick={this.clickCancel}>Cancel</div>
                        </div>
                    </div>
                    <div className='edit-user-form-border'></div>
                    <div className="edit-user-form-header">Delete Account</div>
                    <Link 
                        to={`/account/delete/${user.id}`}
                        id='edit-user-form-delete'
                        className="link">
                        <i className="fas fa-trash-alt" id='delete-icon'></i>Delete Account
                    </Link>
                </form>
            </div>
        )
    }
}

export default EditUserForm