import React from "react";
import {Link} from 'react-router-dom'

class EditUserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.user.id,
            email: this.props.user.email,
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(this.state)
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
                <form onSubmit={this.handleSubmit} id='edit-user-form-proper'>
                    <div className='edit-user-form-header'>Update Email</div>
                    <div className='edit-user-form-input-row'>
                        <div className='edit-user-form-label'>New Email</div>
                        <input 
                            type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="edit-user-form-input">
                        </input>
                    </div>
                    <div className='edit-user-form-input-row'>
                        <div className='edit-user-form-label'>Password</div>
                        <input 
                            type='password'
                            value={this.state.password}
                            onChange={this.update('password')}
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
                </form>
                {this.renderErrors()}
            </div>
        )
    }
}

export default EditUserForm