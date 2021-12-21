import React from 'react';
import {Link} from 'react-router-dom'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            first_name: '',
            email_confirm: '',
            password: '',
            password_confirm: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clickLogIn = this.clickLogIn.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    clickLogIn() {
        let path = '/login';
        this.props.history.push(path);
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createUser(this.state)
        .then(() => this.props.history.push('/'));
    }

    renderErrors() {
        return(
            <ul>
                {this.props.signup_errors.map((error, i) => (
                    <li key={`error-${i}`} id={`signup-error-${i}`} className='signup-errors'>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='page school-prof-form'>
                <div className='session-header'>Create an Account</div>
                <div className='anonymity-txt-row'>
                    <div className='anonymity-txt-col'>
                        <div className='anonymity-txt'>Signing up will still preserve anonymity! Although anybody can create and view professor ratings, signed in users can edit and delete the reviews they wrote.</div>
                    </div>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>YOUR NAME</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.first_name}
                        onChange={this.update('first_name')}>
                    </input>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>EMAIL</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.email}
                        onChange={this.update('email')}>
                    </input>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>CONFIRM EMAIL</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.email_confirm}
                        onChange={this.update('email_confirm')}>
                    </input>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>PASSWORD</div>
                    <input
                        className='school-prof-form-input'
                        type='password'
                        value={this.state.password}
                        onChange={this.update('password')}>
                    </input>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>CONFIRIM PASSWORD</div>
                    <input
                        className='school-prof-form-input'
                        type='password'
                        value={this.state.password_confirm}
                        onChange={this.update('password_confirm')}>
                    </input>
                </div>
                <div className='school-prof-form-submit-cancel'>
                    <div className='school-prof-form-submit-cancel-column'>
                        <input type='submit' value='Sign up' id='signup-button' className='school-prof-form-submit'></input>
                        <div id='signup-login-txt'>OR, ALREADY HAVE AN ACCOUNT?</div>
                        <button onClick={this.clickLogIn} id='signup-login-button'>Log in</button>
                        <Link to='/' className='school-prof-form-cancel'>CANCEL</Link>
                    </div>
                </div>
                {this.renderErrors()}
            </form>
        )
    }
}

export default Signup;