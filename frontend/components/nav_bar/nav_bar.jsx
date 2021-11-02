import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h3>Hey, {currentUser.firstName}!</h3>
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
            <h1>RATE MY PROFS</h1>
            <div>
                {display}
            </div>
        </header>
    )
}