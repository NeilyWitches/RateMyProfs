import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../app/assets/images/rmp_logo.png';

export default ({ current_user, logout }) => {
    const display = current_user ? (
        <div className='nav-bar'>
            {/* <img src={logo} alt="Logo" /> */}
            <h3>HEY, {current_user.first_name.toUpperCase()}</h3>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
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