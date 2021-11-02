import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../app/assets/images/rmp_logo.png';

export default ({ current_user, logout }) => {
    const display = current_user ? (
        <div className='nav-bar'>
            <Link to='/'><img src={window.logo} alt="Logo" className='logo' /></Link>
            <img src={window.logo} alt="Logo" className='logo'/>
            <h3>HEY, {current_user.first_name.toUpperCase()}</h3>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div className='nav-bar'>
            <Link to='/'><img src={window.logo} alt="Logo" className='logo' /></Link>
            <Link className='session-form' to='/signup'>Sign Up</Link>
            <Link className='session-form' to='/login'>Log In</Link>
        </div>
    );
    return (
        <header>
            <div>
                {display}
            </div>
        </header>
    )
}