import React from 'react';
import { Link } from 'react-router-dom';
import ProfileNavLinksContainer from './profile_nav_links_container';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile_links: [
                {id: 1, title: 'Profile'},
                {id: 2, title: 'Account Settings'},
                {id: 3, title: 'My Ratings'},
                {id: 4, title: 'Saved Profs'},
                {id: 5, title: 'Logout'},
            ],
            search: {
                schoolName: '',
                profName: '',
            },
            display_profile_links: false,
            searchingForSchools: true,
            searchTypeChangeDisplay: 'none',
        };

        this.clickDemo = this.clickDemo.bind(this);
        this.clickSignUp = this.clickSignUp.bind(this);
        this.clickLogIn = this.clickLogIn.bind(this);
        this.displayProfileLinks = this.displayProfileLinks.bind(this);
        this.searchSchools = this.searchSchools.bind(this);
        this.searchProfs = this.searchProfs.bind(this);
        this.clickSearchType = this.clickSearchType.bind(this);
        this.changeSearchType = this.changeSearchType.bind(this);
    };

    changeSearchType() {
        if (this.state.searchingForSchools) {
            this.setState({searchingForSchools: false})
        } else {
            this.setState({searchingForSchools: true})
        }
    }

    clickSearchType() {
        if (this.state.searchTypeChangeDisplay === 'none') {
            this.setState({searchTypeChangeDisplay: 'flex'})
        } else {
            this.setState({searchTypeChangeDisplay: 'none'})
        }
    }

    searchSchools(e) {
        e.preventDefault();
        if (this.state.search.schoolName.length > 0) {
            let path = `/schools/${this.state.search.schoolName}`;
            this.props.history.push(path);
        }
    }

    searchProfs(e) {
        e.preventDefault();
        if (this.state.search.profName.length > 0) {
            let path = `/profs/all schools/${this.state.search.profName}`;
            this.props.history.push(path);
        }
    }

    clickDemo(e) {
        e.preventDefault();
        this.props.login({
                email: 'demouser@demo.com',
                first_name: 'Demo User',
                password: 'cupcake',
            })
    };

    clickSignUp() {
        let path = '/signup';
        this.props.history.push(path);
    }

    clickLogIn() {
        let path = '/login';
        this.props.history.push(path);
    }

    displayProfileLinks() {
        this.setState({
            display_profile_links: !this.state.display_profile_links,
        });
    };

    update(field) {
        return (e) => {
            let search = {...this.state.search}
            search[field] = e.currentTarget.value;
            this.setState({ search })
        }
    }

    render() {
        const { current_user, location } = this.props;
        let profile_links = null;
        if ( this.state.display_profile_links ) {
            profile_links = (
                <div>
                    {
                        this.state.profile_links.map((profile_link, index) => {
                            return <ProfileNavLinksContainer key={profile_link.id}
                                    title={profile_link.title} history={this.props.history}/>
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
                        <div className='navbar-search'>
                            {this.state.searchingForSchools ? 
                            <div className='navbar-search-type'>
                                <div className='navbar-search-type-current' 
                                    onClick={this.clickSearchType}>
                                    <i className="fas fa-graduation-cap navbar-search-type-icon"></i>
                                    <div className='navbar-search-type-current-label'>Schools</div>
                                    {this.state.searchTypeChangeDisplay === 'none' ? 
                                    <i className="fas fa-chevron-down"></i> :
                                    <i className="fas fa-chevron-up"></i>}
                                </div>
                                <div 
                                    className='navbar-search-type-change'
                                    style={{display: this.state.searchTypeChangeDisplay}}
                                    onClick={this.changeSearchType}>
                                    <i className="fas fa-apple-alt navbar-search-type-icon"></i>
                                    <div>Profs</div>
                                </div>
                            </div> : 
                            <div className='navbar-search-type'>
                                <div className='navbar-search-type-current' 
                                    onClick={this.clickSearchType}>
                                    <i className="fas fa-apple-alt navbar-search-type-icon"></i>
                                    <div className='navbar-search-type-current-label'>Profs</div>
                                    {this.state.searchTypeChangeDisplay === 'none' ? 
                                    <i className="fas fa-chevron-down"></i> :
                                    <i className="fas fa-chevron-up"></i>}
                                </div>
                                <div 
                                    className='navbar-search-type-change'
                                    style={{display: this.state.searchTypeChangeDisplay}}
                                    onClick={this.changeSearchType}>
                                    <i className="fas fa-graduation-cap navbar-search-type-icon"></i>
                                    <div>Schools</div>
                                </div>
                            </div>}
                            {this.state.searchingForSchools ? 
                            <form className='navbar-form' onSubmit={this.searchSchools}>
                                <input 
                                    className='navbar-input'
                                    type='text'
                                    value={this.state.search.schoolName}
                                    onChange={this.update('schoolName')}>
                                </input>
                            </form> :
                            <form className='navbar-form' onSubmit={this.searchProfs}>
                                <input 
                                    className='navbar-input'
                                    type='text'
                                    value={this.state.search.profName}
                                    onChange={this.update('profName')}>
                                </input>
                            </form>}
                        </div>
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
                                <div className='navbar-search'>
                                    {this.state.searchingForSchools ? 
                                    <div className='navbar-search-type'>
                                        <div className='navbar-search-type-current' 
                                            onClick={this.clickSearchType}>
                                            <i className="fas fa-graduation-cap navbar-search-type-icon"></i>
                                            <div className='navbar-search-type-current-label'>Schools</div>
                                            {this.state.searchTypeChangeDisplay === 'none' ? 
                                            <i className="fas fa-chevron-down"></i> :
                                            <i className="fas fa-chevron-up"></i>}
                                        </div>
                                        <div 
                                            className='navbar-search-type-change'
                                            style={{display: this.state.searchTypeChangeDisplay}}
                                            onClick={this.changeSearchType}>
                                            <i className="fas fa-apple-alt navbar-search-type-icon"></i>
                                            <div>Profs</div>
                                        </div>
                                    </div> : 
                                    <div className='navbar-search-type'>
                                        <div className='navbar-search-type-current' 
                                            onClick={this.clickSearchType}>
                                            <i className="fas fa-apple-alt navbar-search-type-icon"></i>
                                            <div className='navbar-search-type-current-label'>Profs</div>
                                            {this.state.searchTypeChangeDisplay === 'none' ? 
                                            <i className="fas fa-chevron-down"></i> :
                                            <i className="fas fa-chevron-up"></i>}
                                        </div>
                                        <div 
                                            className='navbar-search-type-change'
                                            style={{display: this.state.searchTypeChangeDisplay}}
                                            onClick={this.changeSearchType}>
                                            <i className="fas fa-graduation-cap navbar-search-type-icon"></i>
                                            <div>Schools</div>
                                        </div>
                                    </div>}
                                    {this.state.searchingForSchools ? 
                                    <form className='navbar-form' onSubmit={this.searchSchools}>
                                        <input 
                                            className='navbar-input'
                                            type='text'
                                            value={this.state.search.schoolName}
                                            onChange={this.update('schoolName')}>
                                        </input>
                                    </form> :
                                    <form className='navbar-form' onSubmit={this.searchProfs}>
                                        <input 
                                            className='navbar-input'
                                            type='text'
                                            value={this.state.search.profName}
                                            onChange={this.update('profName')}>
                                        </input>
                                    </form>}
                                </div>
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
                                <div className='navbar-search'>
                                    {this.state.searchingForSchools ? 
                                    <div className='navbar-search-type'>
                                        <div className='navbar-search-type-current' 
                                            onClick={this.clickSearchType}>
                                            <i className="fas fa-graduation-cap navbar-search-type-icon"></i>
                                            <div className='navbar-search-type-current-label'>Schools</div>
                                            {this.state.searchTypeChangeDisplay === 'none' ? 
                                            <i className="fas fa-chevron-down"></i> :
                                            <i className="fas fa-chevron-up"></i>}
                                        </div>
                                        <div 
                                            className='navbar-search-type-change'
                                            style={{display: this.state.searchTypeChangeDisplay}}
                                            onClick={this.changeSearchType}>
                                            <i className="fas fa-apple-alt navbar-search-type-icon"></i>
                                            <div>Profs</div>
                                        </div>
                                    </div> : 
                                    <div className='navbar-search-type'>
                                        <div className='navbar-search-type-current' 
                                            onClick={this.clickSearchType}>
                                            <i className="fas fa-apple-alt navbar-search-type-icon"></i>
                                            <div className='navbar-search-type-current-label'>Profs</div>
                                            {this.state.searchTypeChangeDisplay === 'none' ? 
                                            <i className="fas fa-chevron-down"></i> :
                                            <i className="fas fa-chevron-up"></i>}
                                        </div>
                                        <div 
                                            className='navbar-search-type-change'
                                            style={{display: this.state.searchTypeChangeDisplay}}
                                            onClick={this.changeSearchType}>
                                            <i className="fas fa-graduation-cap navbar-search-type-icon"></i>
                                            <div>Schools</div>
                                        </div>
                                    </div>}
                                    {this.state.searchingForSchools ? 
                                    <form className='navbar-form' onSubmit={this.searchSchools}>
                                        <input 
                                            className='navbar-input'
                                            type='text'
                                            value={this.state.search.schoolName}
                                            onChange={this.update('schoolName')}>
                                        </input>
                                    </form> :
                                    <form className='navbar-form' onSubmit={this.searchProfs}>
                                        <input 
                                            className='navbar-input'
                                            type='text'
                                            value={this.state.search.profName}
                                            onChange={this.update('profName')}>
                                        </input>
                                    </form>}
                                </div>
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
                            <div className='nav-bar'>
                                <Link to='/'><img src={window.logo} alt="Logo" className='logo' /></Link>
                                <div className='navbar-search'>
                                    {this.state.searchingForSchools ? 
                                    <div className='navbar-search-type'>
                                        <div className='navbar-search-type-current' 
                                            onClick={this.clickSearchType}>
                                            <i className="fas fa-graduation-cap navbar-search-type-icon"></i>
                                            <div className='navbar-search-type-current-label'>Schools</div>
                                            {this.state.searchTypeChangeDisplay === 'none' ? 
                                            <i className="fas fa-chevron-down"></i> :
                                            <i className="fas fa-chevron-up"></i>}
                                        </div>
                                        <div 
                                            className='navbar-search-type-change'
                                            style={{display: this.state.searchTypeChangeDisplay}}
                                            onClick={this.changeSearchType}>
                                            <i className="fas fa-apple-alt navbar-search-type-icon"></i>
                                            <div>Profs</div>
                                        </div>
                                    </div> : 
                                    <div className='navbar-search-type'>
                                        <div className='navbar-search-type-current' 
                                            onClick={this.clickSearchType}>
                                            <i className="fas fa-apple-alt navbar-search-type-icon"></i>
                                            <div className='navbar-search-type-current-label'>Profs</div>
                                            {this.state.searchTypeChangeDisplay === 'none' ? 
                                            <i className="fas fa-chevron-down"></i> :
                                            <i className="fas fa-chevron-up"></i>}
                                        </div>
                                        <div 
                                            className='navbar-search-type-change'
                                            style={{display: this.state.searchTypeChangeDisplay}}
                                            onClick={this.changeSearchType}>
                                            <i className="fas fa-graduation-cap navbar-search-type-icon"></i>
                                            <div>Schools</div>
                                        </div>
                                    </div>}
                                    {this.state.searchingForSchools ? 
                                    <form className='navbar-form' onSubmit={this.searchSchools}>
                                        <input 
                                            className='navbar-input'
                                            type='text'
                                            value={this.state.search.schoolName}
                                            onChange={this.update('schoolName')}>
                                        </input>
                                    </form> :
                                    <form className='navbar-form' onSubmit={this.searchProfs}>
                                        <input 
                                            className='navbar-input'
                                            type='text'
                                            value={this.state.search.profName}
                                            onChange={this.update('profName')}>
                                        </input>
                                    </form>}
                                </div>
                                <div className='session-buttons'>
                                    <button onClick={this.clickLogIn} id='login-button'>Log In</button>
                                    <button onClick={this.clickSignUp}>Sign Up</button>
                                    <button onClick={this.clickDemo} id='demo-button'>Demo Login</button>
                                </div>
                            </div>
                    </header>
                )
            }
        }
    }
};

export default NavBar;