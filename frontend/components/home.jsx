import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: 'demouser@demo.com',
            first_name: 'Demo User',
            last_name: 'Demo User',
            passsord: 'cupcake',
        }

        this.clickSignUp = this.clickSignUp.bind(this);
        this.clickDemo = this.clickDemo.bind(this);
    }

    clickSignUp() {
        let path = '/signup';
        this.props.history.push(path);
    }

    clickDemo(e) {
        e.preventDefault();
        this.props.login(this.state)
        .then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div id='home'>
                <div id='on-books'>
                    <img src={window.books} alt='Books' id='books' />
                    <img src={window.logo_big} alt='Big Logo' id='logo-big' />
                    <div id='get-started'>Enter your professor's name to get started.</div>
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
    }
}

export default Home;