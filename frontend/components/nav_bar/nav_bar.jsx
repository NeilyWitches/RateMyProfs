import React from 'react';
import { Link } from 'react-router-dom';
import ProfileNavLinks from './profile_nav_links';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            demouser: {
                email: 'demouser@demo.com',
                first_name: 'Demo User',
                last_name: 'Demo User',
                password: 'cupcake',
            },
            profile_links: [
                {id: 1, title: 'Profile'},
                {id: 2, title: 'Account Settings'},
                {id: 3, title: 'Your Ratings'},
                {id: 4, title: 'Saved Profs'},
                {id: 5, title: 'Logout'},
            ],
            display_profile_links: false
        };

        this.clickDemo = this.clickDemo.bind(this);
        this.clickSignUp = this.clickSignUp.bind(this);
        this.clickLogIn = this.clickLogIn.bind(this);
       
    };

    clickDemo(e) {
        e.preventDefault();
        this.props.login(this.state.demouser)
        .then(() => this.props.history.push('/'));
    };

    clickSignUp() {
        let path = '/signup';
        this.props.history.push(path);
    }

    clickLogIn() {
        let path = '/login';
        this.props.history.push(path);
    }

    componentWillMount() {
        this.displayProfileLinks = this.displayProfileLinks.bind(this);
    }

    displayProfileLinks() {
        this.setState({
            display_profile_links: !this.state.display_profile_links,
        });
    };

    render() {
        const { createUser, current_user, logout, location } = this.props;
        let profile_links = null;
        if ( this.state.display_profile_links ) {
            profile_links = (
                <div>
                    {
                        this.state.profile_links.map((profile_link, index) => {
                            return <ProfileNavLinks key={profile_link.id}
                                    title={profile_link.title}/>
                        })
                    }
                </div>
            )
        }
        if (current_user) {
            return (
                <header>
                    <div className='nav-bar'>
                        <Link to='/'><img src={window.logo} alt="Logo" className='logo' /></Link>
                        <button onClick={this.displayProfileLinks} id='hey-button'>HEY, {current_user.first_name.toUpperCase()}</button>
                    </div>
                    <div id='profile-nav-links-container'>
                        <ul id='profile-nav-links'>
                            {profile_links}
                        </ul>
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
                                <div className='session-buttons'>
                                    <button onClick={this.clickSignUp}>Sign Up</button>
                                    <button onClick={this.clickDemo} id='demo-button'>Demo Login</button>
                                </div>
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
                                <div className='session-buttons'>
                                    <button onClick={this.clickLogIn} id='login-button'>Log In</button>
                                    <button onClick={this.clickDemo} id='demo-button'>Demo Login</button>
                                </div>
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
                                <div className='session-buttons'>
                                    <button onClick={this.clickLogIn} id='login-button'>Log In</button>
                                    <button onClick={this.clickSignUp}>Sign Up</button>
                                    <button onClick={this.clickDemo} id='demo-button'>Demo Login</button>
                                </div>
                            </div>
                        </div>
                    </header>
                )
            }
        }
    }
};

export default NavBar;