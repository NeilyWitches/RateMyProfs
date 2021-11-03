import React from 'react';
import { Link } from 'react-router-dom';
// import DemoLoginButton from './demo_login_button';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: 'demouser@demo.com',
            first_name: 'Demo User',
            last_name: 'Demo User',
            password: 'demouser',
        };

        this.clickDemo = this.clickDemo.bind(this);
    };

    clickDemo(e) {
        e.preventDefault();
        this.props.createUser(this.state)
        .then(() => this.props.history.push('/'));
    };

    // render() {
    //     const { createUser, current_user, logout, location } = this.props;
    //     const display = current_user ? (
    //         <div className='nav-bar'>
    //             <Link to='/'><img src={window.logo} alt="Logo" className='logo' /></Link>
    //             <h3>HEY, {current_user.first_name.toUpperCase()}</h3>
    //             <button onClick={logout}>Logout</button>
    //         </div>
    //     ) : (
    //         <div className='nav-bar'>
    //             <Link to='/'><img src={window.logo} alt="Logo" className='logo' /></Link>
    //             <Link className='session-form' to='/signup'>Sign Up</Link>
    //             <Link className='session-form' to='/login'>Log In</Link>
    //             <button onClick={this.clickDemo}>Demo Login</button>
    //         </div>
    //     );
    //     return (
    //         <header>
    //             <div>
    //                 {display}
    //             </div>
    //         </header>
    //     )
    // }
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