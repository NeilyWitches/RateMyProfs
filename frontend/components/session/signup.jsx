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

    render() {
        return (
            <div>
                <h2>Sign Up!</h2>
                <form>
                    <label>Email:
                        <input
                            type='text'
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>First Name:
                        <input 
                            type='text'
                            value={this.state.first_name}
                            onChange={this.handleInput('first_name')}
                            />
                    </label>
                    <label>Last Name:
                        <input 
                            type='text'
                            value={this.state.last_name}
                            onChange={this.handleInput('last_name')}
                            />
                    </label>
                    <label>Password:
                        <input
                            type='password'
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                        <button onClick={this.handleSubmit}>Sign Up!</button>
                    </label>
                </form>
            </div>
        )
    }
}

export default Signup;