import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            demo_user: {
                email: 'demouser@demo.com',
                first_name: 'Demo User',
                last_name: 'Demo User',
                password: 'cupcake',
            }
        }

        this.clickSignUp = this.clickSignUp.bind(this);
        this.clickDemo = this.clickDemo.bind(this);
        this.clickExplore = this.clickExplore.bind(this);
    }

    clickSignUp() {
        let path = '/signup';
        this.props.history.push(path);
    }

    clickDemo(e) {
        e.preventDefault();
        this.props.login(this.state.demo_user)
        .then(() => this.props.history.push('/'));
    }

    clickExplore() {
        let path = '/profs';
        this.props.history.push(path);
    }

    render() {
        const { current_user } = this.props;
        if (!current_user) {
            return (
                <div id='home'>
                    <div id='on-books'>
                        <img src={window.books} alt='Books' id='books' />
                        <img src={window.logo_big} alt='Big Logo' id='logo-big' />
                        <div id='get-started'>Click to see a list of profs.</div>
                        <button onClick={this.clickExplore} id='explore-button'>Explore</button>
                    </div>
                    <div id='love-rmp-text'>
                        <div id='join-rmp'>Join the RMP Family</div>
                        <div id='make-official'>Love RMP? Let's make it official.</div>
                    </div>
                    <div className='home-info'>
                        <div className='home-info-div'>
                            <img src={window.pencil} alt='Pencil' id='pencil' className='home-info-img'/>
                            <div className='home-info-txt'>Manage and edit your ratings</div>
                        </div>
                        <div className='home-info-div'>
                            <img src={window.anon} alt='Anonymous' id='anon' className='home-info-img'/>
                            <div className='home-info-txt'>Your ratings are always anonymous</div>
                        </div>
                        <div className='home-info-div'>
                            <img src={window.like_dislike} alt='Like Dislike' id='like-dislike' className='home-info-img'/>
                            <div className='home-info-txt'>Thumbs up or down ratings</div>
                        </div>
                    </div>
                    <div id='session-home'>
                        <button onClick={this.clickSignUp} className='home-buttons'>Sign up now!</button>
                        <div id='home-try'>
                            <div id='home-try-txt'>Or try it out with a demo sign in!</div>
                            <button onClick={this.clickDemo} className='home-buttons'>Demo Login</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div id='home'>
                    <div id='on-books'>
                        <img src={window.books} alt='Books' id='books' />
                        <img src={window.logo_big} alt='Big Logo' id='logo-big' />
                        <div id='get-started'>Click to see a list of profs.</div>
                        <button onClick={this.clickExplore} id='explore-button'>Explore</button>
                    </div>
                    <div id='love-rmp-text'>
                        <div id='join-rmp'>Welcome back!</div>
                    </div>
                    <div className='home-info'>
                        <div className='home-info-div'>
                            <img src={window.pencil} alt='Pencil' id='pencil' className='home-info-img' />
                            <div className='home-info-txt'>Manage and edit your ratings</div>
                        </div>
                        <div className='home-info-div'>
                            <img src={window.anon} alt='Anonymous' id='anon' className='home-info-img' />
                            <div className='home-info-txt'>Your ratings are always anonymous</div>
                        </div>
                        <div className='home-info-div'>
                            <img src={window.like_dislike} alt='Like Dislike' id='like-dislike' className='home-info-img' />
                            <div className='home-info-txt'>Thumbs up or down ratings</div>
                        </div>
                    </div>
                    <div id='session-home'>
                        <button className='home-buttons'>My Ratings</button>
                    </div>
                </div>
            )
        }
    }
}

export default Home;