import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            password: '',
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

    handleInput(type) {
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
            <div className='session-form'>
                
                <div id='signup-form'>
                    <form id='signup-form-proper'>
                        <div id='signup-left'>
                            <h2 id='signup-header'>Create an Account</h2>
                            
                            <label>EMAIL</label>
                            <label>FIRST NAME</label>
                            <label>LAST NAME</label>
                            <label>PASSWORD</label>
                        </div>
                        <div id='signup-right'>
                            <div id='anonymity-txt'>Signing up will still preserve anonymity! Although anybody can create and view professor ratings, signed in users can edit and delete the reviews they wrote.</div>
                            <input
                                type='text'
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                            <input
                                type='text'
                                value={this.state.first_name}
                                onChange={this.handleInput('first_name')}
                            />
                            <input
                                type='text'
                                value={this.state.last_name}
                                onChange={this.handleInput('last_name')}
                            />
                            <input
                                type='password'
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                            <button onClick={this.handleSubmit} id='signup-submit'>Sign Up</button>
                            <div id='signup-login-txt'>OR, ALREADY HAVE AN ACCOUNT?</div>
                            <button onClick={this.clickLogIn} id='signup-login-button'>Log in</button>
                        </div>
                    </form>
                    {this.renderErrors()}
                </div>
            </div>
        )
    }
}

export default Signup;