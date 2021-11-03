import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: 'demouser@demo.com',
            first_name: 'Demo User',
            last_name: 'Demo User',
            password: 'cupcake',
        };

        this.clickDemo = this.clickDemo.bind(this);
    };

    clickDemo(e) {
        e.preventDefault();
        this.props.login(this.state)
        .then(() => this.props.history.push('/'));
    };

    render() {
        const { createUser, current_user, logout, location } = this.props;
        if (current_user) {
            return (
                <header>
                    <div>
                        <div className='nav-bar'>
                            <Link to='/'><img src={window.logo} alt="Logo" className='logo' /></Link>
                            <h3>HEY, {current_user.first_name.toUpperCase()}</h3>
                            <button onClick={logout}>Logout</button>
                        </div>
                    </div>
                </header>
            )
        } else {
            if (location.pathname === '/login') {
                return (
                    <header>
                        <div>
                            <div className='nav-bar'>
                                <Link to='/'><img src={window.logo} alt="Logo" className='logo' /></Link>
                                <Link className='session-form' to='/signup'>Sign Up</Link>
                                <button onClick={this.clickDemo}>Demo Login</button>
                            </div>
                        </div>
                    </header>
                )
            } else if (location.pathname === '/signup') {
                return (
                    <header>
                        <div>
                            <div className='nav-bar'>
                                <Link to='/'><img src={window.logo} alt="Logo" className='logo' /></Link>
                                <Link className='session-form' to='/login'>Log In</Link>
                                <button onClick={this.clickDemo}>Demo Login</button>
                            </div>
                        </div>
                    </header>
                )
            } else {
                return (
                    <header>
                        <div>
                            <div className='nav-bar'>
                                <Link to='/'><img src={window.logo} alt="Logo" className='logo' /></Link>
                                <Link className='session-form' to='/signup'>Sign Up</Link>
                                <Link className='session-form' to='/login'>Log In</Link>
                                <button onClick={this.clickDemo}>Demo Login</button>
                            </div>
                        </div>
                    </header>
                )
            }
        }
    }
};

export default NavBar;