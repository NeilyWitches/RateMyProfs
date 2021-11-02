import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(type) {
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
                            value={this.handleInput('email')}
                        />
                    </label>
                    <label>First Name:
                        <input 
                            type='text'
                            value={this.state.email}
                            onChange={this.handleInput('firstName')}
                            />
                    </label>
                    <label>Last Name:
                        <input 
                            type='text'
                            value={this.state.lastName}
                            onChange={this.handleInput('lastName')}
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