import React from "react";
import {Link} from 'react-router-dom'

class EditUserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emailChange: {
                id: this.props.user.id,
                email: this.props.user.email,
                password: ''
            },
            passwordChange: {

            }
        }

        this.changeEmail = this.changeEmail.bind(this);
    };

    updateEmailForm(field) {
        let emailChange = {...this.state.emailChange}
        return e => {
            emailChange[field] = e.currentTarget.value;
            this.setState({emailChange})
        }
    }

    changeEmail(e) {
        e.preventDefault();
        this.props.updateUser(this.state.emailChange)
        .then(() => this.props.history.push(`/account/${this.props.user.id}`));
    }

    renderErrors() {
        return (
            <ul>
                {this.props.userErrors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        const { user} = this.props;
        return (
            <div className="page">
                <div className="account-header">Hey, {user.first_name}</div>
                <form onSubmit={this.changeEmail} id='edit-user-form-proper'>
                    <div className='edit-user-form-header'>Update Email</div>
                    <div className='edit-user-form-input-row'>
                        <div className='edit-user-form-label'>New Email</div>
                        <input 
                            type='text'
                            value={this.state.emailChange.email}
                            onChange={this.updateEmailForm('email')}
                            className="edit-user-form-input">
                        </input>
                    </div>
                    <div className='edit-user-form-input-row'>
                        <div className='edit-user-form-label'>Password</div>
                        <input 
                            type='password'
                            value={this.state.emailChange.password}
                            onChange={this.updateEmailForm('password')}
                            className="edit-user-form-input">
                        </input>
                    </div>
                    <div className="edit-user-form-input-row" id='edit-user-form-submit-row'>
                        <input 
                            type='submit' id='edit-user-form-submit' 
                            value='Update Email'>
                        </input>
                    </div>
                    <div className="edit-user-form-input-row" id='edit-user-form-submit-row'>
                        <Link 
                            id='edit-user-form-cancel'
                            to={`/account/${user.id}`}
                            className="link">Cancel
                        </Link>
                    </div>
                    {this.renderErrors()}
                    <div id='edit-user-form-border'></div>
                </form>
                <form onSubmit={this.handleSubmitPassword}>

                </form>
            </div>
        )
    }
}

export default EditUserForm