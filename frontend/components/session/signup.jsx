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
                    
                    {this.renderErrors()}
                    <form id='signup-form-proper'>
                        <div id='signup-left'>
                            <h2 id='signup-header'>Create an Account</h2>
                            
                            <label>EMAIL</label>
                            <label>FIRST NAME</label>
                            <label>LAST NAME</label>
                            <label>PASSWORD</label>
                        </div>
                        <div id='signup-right'>
                            <div id='anonymity-txt'>Signing up will still preserve anonymity!</div>
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
                        </div>


                        
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;