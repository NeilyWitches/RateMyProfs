import React from "react";
import {Link} from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedSchool: null,
            search: {
                schoolName: '',
                profName: '',
            },
            searchSchoolDisplay: 'none',
            searchProfDisplay: 'none',
            onlyProfs: true,
        }  

        this.clickSignUp = this.clickSignUp.bind(this);
        this.clickDemo = this.clickDemo.bind(this);
        this.clickExploreProfs = this.clickExploreProfs.bind(this);
        this.clickExploreSchools = this.clickExploreSchools.bind(this);
        this.clickMyRatings = this.clickMyRatings.bind(this);
        this.displaySchoolSearch = this.displaySchoolSearch.bind(this);
        this.hideSchoolSearch = this.hideSchoolSearch.bind(this)
        this.clickSchool = this.clickSchool.bind(this);
        this.clickProf = this.clickProf.bind(this);
        this.clickDiffSchool = this.clickDiffSchool.bind(this);
        this.displayProfSearch = this.displayProfSearch.bind(this);
        this.hideProfSearch = this.hideProfSearch.bind(this)
        this.searchProfs = this.searchProfs.bind(this)
        this.searchSchools = this.searchSchools.bind(this)
        this.selectAllSchools = this.selectAllSchools.bind(this)
    }

    searchProfs(e) {
        e.preventDefault();
        if (this.state.search.profName.length > 0) {
            let path = `/profs/${this.state.search.schoolName}/${this.state.search.profName}`;
            this.props.history.push(path);
        }
    }

    searchSchools(e) {
        e.preventDefault();
        if (this.state.search.schoolName.length > 0) {
            let path = `/schools/${this.state.search.schoolName}`;
            this.props.history.push(path);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.schools !== this.props.schools && this.props.current_user) {
            this.setState({selectedSchool: this.props.schools[this.props.current_user.school_id].name})
        }

        if (prevProps.current_user !== this.props.current_user) {
            this.setState({selectedSchool: this.props.current_user ? this.props.schools[this.props.current_user.school_id].name : null})
        }
    }

    clickDiffSchool() {
        this.setState({selectedSchool: null})
    }

    selectAllSchools() {
        this.setState({selectedSchool: "all schools"})
        let search = {...this.state.search}
        search.schoolName = "all schools"
        this.setState({search})
    }

    clickSchool(e) {
        this.setState({selectedSchool: e.currentTarget.children[0].innerText})
        let search = {...this.state.search}
        search.schoolName = e.currentTarget.children[0].innerText;
        this.setState({search})
    }

    clickProf(e) {
        let search = {...this.state.search}
        search.profName = e.currentTarget.children[0].innerText;
        this.setState({search})
    }

    clickSignUp() {
        let path = '/signup';
        this.props.history.push(path);
    }

    clickDemo(e) {
        e.preventDefault();
        this.props.login({
                email: 'demouser@demo.com',
                first_name: 'Demo User',
                password: 'cupcake',
            })
        .then(() => this.props.history.push('/'));
    }

    clickExploreProfs() {
        let path = '/profs';
        this.props.history.push(path);
    }

    clickExploreSchools() {
        let path = '/schools';
        this.props.history.push(path);
    }

    clickMyRatings() {
        let path = `/account/ratings/${this.props.current_user.id}`;
        this.props.history.push(path);
    }

    componentDidMount() {
        this.props.requestSchools()
        this.props.requestAllProfs(this.state.onlyProfs)
    }

    update(field) {
        return (e) => {
            let search = {...this.state.search}
            search[field] = e.currentTarget.value;
            this.setState({ search })
        }
    }

    displaySchoolSearch() {
        this.setState({searchSchoolDisplay: 'block'})
    }

    displayProfSearch() {
        this.setState({searchProfDisplay: 'block'})
    }

    hideSchoolSearch() {
        setTimeout(() => {
            this.setState({searchSchoolDisplay: 'none'})
        }, 250);
    }

    hideProfSearch() {
        setTimeout(() => {
            this.setState({searchProfDisplay: 'none'})
        }, 250);
    }

    filterSchools(schools) {
        let filterdSchools = []
        for (let i = 0; i < schools.length; i++) {
            if (schools[i].name.toLowerCase().includes(this.state.search.schoolName.toLowerCase())) {
                filterdSchools.push(schools[i])
            }
        }
        return filterdSchools
    }

    filterProfs(profs, schools) {
        let schoolId;
        let filterdProfs = []
        if (this.state.selectedSchool === 'all schools') {
            for (let i = 0; i < profs.length; i++) {
                if (profs[i].name.toLowerCase().includes(this.state.search.profName.toLowerCase())) {
                    filterdProfs.push(profs[i])
                }
            }
            return filterdProfs
        }

        for (let i = 0; i < schools.length; i++) {
            if (schools[i].name === this.state.selectedSchool) {
                schoolId = schools[i].id
            }
        }

        for (let i = 0; i < profs.length; i++) {
            if (profs[i].name.toLowerCase().includes(this.state.search.profName.toLowerCase()) && profs[i].school_id === schoolId) {
                filterdProfs.push(profs[i])
            }
        }
        return filterdProfs
    }

    render() {
        const { current_user, schoolList, profs, schools} = this.props;

        let filteredSchools = this.filterSchools(schoolList)
        let filteredProfs = this.filterProfs(profs, schoolList)

        if (!current_user) {
            if (this.state.selectedSchool) {
                return (
                    <div id='home'>
                        <div id='on-books'>
                            <img src={window.books} alt='Books' id='books' />
                            <img src={window.logo_big} alt='Big Logo' id='logo-big' />
                            <div id='get-started'>Find a <strong>prof</strong> at <strong>{this.state.selectedSchool}</strong>.</div>
                            <form className="home-form" onSubmit={this.searchProfs}>
                                <input
                                    className='home-search-input'
                                    type='text'
                                    value={this.state.search.profName}
                                    onChange={this.update('profName')}
                                    onFocus={this.displayProfSearch}
                                    onBlur={this.hideProfSearch}
                                    placeholder="Prof name">
                                </input>
                            </form>
                            <ul className='home-search'
                                style={{display: this.state.searchProfDisplay}}>
                                {
                                    filteredProfs.map((prof, index) => 
                                    <li 
                                        key={index}
                                        className='school-li'
                                        onClick={this.clickProf}>
                                        <div className='school-li-name'>{prof?.name}</div>
                                        <div className='school-li-location'>{schools[prof.school_id]?.name}</div>
                                    </li>)
                                }
                                <Link to='/profs/new' className='school-search-add-school'>DON'T SEE YOUR NAME LISTED AS A PROF? CLICK HERE TO ADD IT TO RMP!</Link>
                            </ul>
                            <div onClick={this.clickDiffSchool} className='home-diff-school'>I want to find a prof at a different school</div>
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
                            <div id='get-started'>Enter your <strong>school</strong> to get started</div>
                            <form className="home-form" onSubmit={this.searchSchools}>
                                <input
                                    className='home-search-input'
                                    type='text'
                                    value={this.state.search.schoolName}
                                    onChange={this.update('schoolName')}
                                    onFocus={this.displaySchoolSearch}
                                    onBlur={this.hideSchoolSearch}
                                    placeholder="School name">
                                </input>
                            </form>
                            <ul className='home-search'
                                style={{display: this.state.searchSchoolDisplay}}>
                                {
                                    filteredSchools.map((school) => 
                                    <li 
                                        key={school.id}
                                        className='school-li'
                                        onClick={this.clickSchool}>
                                        <div className='school-li-name'>{school?.name}</div>
                                        <div className='school-li-location'>{school?.city}, {school?.state}</div>
                                    </li>)
                                }
                                <Link to='/schools/new' className='school-search-add-school'>DON'T SEE YOUR SCHOOL? CLICK HERE TO ADD IT TO RMP!</Link>
                            </ul>
                            <div onClick={this.selectAllSchools} className='home-diff-school'>I'd like to look up a professor by name</div>
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
        } else {
            if (this.state.selectedSchool) {
                return (
                    <div id='home'>
                        <div id='on-books'>
                            <img src={window.books} alt='Books' id='books' />
                            <img src={window.logo_big} alt='Big Logo' id='logo-big' />
                            <div id='get-started'>Find a <strong>prof</strong> at <strong>{this.state.selectedSchool}</strong>.</div>
                            <form className="home-form" onSubmit={this.searchProfs}>
                                <input
                                    className='home-search-input'
                                    type='text'
                                    value={this.state.search.profName}
                                    onChange={this.update('profName')}
                                    onFocus={this.displayProfSearch}
                                    onBlur={this.hideProfSearch}
                                    placeholder="Prof name">
                                </input>
                            </form>
                            <ul className='home-search'
                                style={{display: this.state.searchProfDisplay}}>
                                {
                                    filteredProfs.map((prof, index) => 
                                    <li 
                                        key={index}
                                        className='school-li'
                                        onClick={this.clickProf}>
                                        <div className='school-li-name'>{prof?.name}</div>
                                        <div className='school-li-location'>{schools[prof.school_id]?.name}</div>
                                    </li>)
                                }
                                <Link to='/profs/new' className='school-search-add-school'>DON'T SEE YOUR NAME LISTED AS A PROF? CLICK HERE TO ADD IT TO RMP!</Link>
                            </ul>
                            <div onClick={this.clickDiffSchool} className='home-diff-school'>I want to find a prof at a different school</div>
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
                            <button onClick={this.clickMyRatings} className='home-buttons'>My Ratings</button>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div id='home'>
                        <div id='on-books'>
                            <img src={window.books} alt='Books' id='books' />
                            <img src={window.logo_big} alt='Big Logo' id='logo-big' />
                            <div id='get-started'>Enter your <strong>school</strong> to get started</div>
                            <form className="home-form" onSubmit={this.searchSchools}>
                                <input
                                    className='home-search-input'
                                    type='text'
                                    value={this.state.search.schoolName}
                                    onChange={this.update('schoolName')}
                                    onFocus={this.displaySchoolSearch}
                                    onBlur={this.hideSchoolSearch}
                                    placeholder="School name">
                                </input>
                            </form>
                            <ul className='home-search'
                                style={{display: this.state.searchSchoolDisplay}}>
                                {
                                    filteredSchools.map((school) => 
                                    <li 
                                        key={school.id}
                                        className='school-li'
                                        onClick={this.clickSchool}>
                                        <div className='school-li-name'>{school?.name}</div>
                                        <div className='school-li-location'>{school?.city}, {school?.state}</div>
                                    </li>)
                                }
                                <Link to='/schools/new' className='school-search-add-school'>DON'T SEE YOUR SCHOOL? CLICK HERE TO ADD IT TO RMP!</Link>
                            </ul>
                            <div onClick={this.selectAllSchools} className='home-diff-school'>I'd like to look up a professor by name</div>
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
                            <button onClick={this.clickMyRatings} className='home-buttons'>My Ratings</button>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default Home;