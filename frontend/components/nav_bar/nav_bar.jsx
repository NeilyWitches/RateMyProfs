import React from 'react';
import { Link } from 'react-router-dom';

export default ({ current_user, logout }) => {
    const display = current_user ? (
        <div>
            <h3>Hey, {current_user.first_name}!</h3>
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