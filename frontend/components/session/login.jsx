import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    handleInput(type) {
        return(e) => {
            this.setState({ [type]: e.target.value });
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
        .then(() => this.props.history.push('/'));
    }

    renderErrors() {
        return(
            <ul className='form-errors'>
                {this.props.login_errors.map((error, i) => (
                    <li key={`error-${i}`} id={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className='session-form' id='login-form'>
                <h2 id='login-header'>Log In to Rate My Profs</h2>
                
                <form id='login-form-proper'>
                    <div id='login-txt'>Go ahead, log in, you're still anonymous.</div>
                    <Link to='/signup' id='login-signup-link'>DON'T HAVE AN ACCOUNT? SIGN UP!</Link>
                    <input
                        type='text'
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                        placeholder="EMAIL"
                    />
                    <input
                        type='password'
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        placeholder="PASSWORD"
                    />
                    <button onClick={this.handleSubmit} className='login-form-submit'>Log in</button>
                </form>
                {this.renderErrors()}
            </div>
        )
    }
}

export default Login;