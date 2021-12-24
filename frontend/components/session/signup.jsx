import React from 'react';
import {Link} from 'react-router-dom'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: {
                email: '',
                user_name: '',
                email_confirm: '',
                password: '',
                password_confirm: '',
                school_name: '',
                signingInAsProf: false,
            },
            searchProfDisplay: 'none',
            searchSchoolDisplay: 'none',
            onlyProfs: true
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.clickLogIn = this.clickLogIn.bind(this);
        this.clickStudent = this.clickStudent.bind(this);
        this.clickProfButton = this.clickProfButton.bind(this);
        this.clickSchool = this.clickSchool.bind(this);
        this.clickProf = this.clickProf.bind(this);
        this.displayProfSearch = this.displayProfSearch.bind(this);
        this.displaySchoolSearch = this.displaySchoolSearch.bind(this);
        this.hideProfSearch = this.hideProfSearch.bind(this)
        this.hideSchoolSearch = this.hideSchoolSearch.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors();
        this.props.requestAllProfs(this.state.onlyProfs);
        this.props.requestSchools()
    }

    clickLogIn() {
        let path = '/login';
        this.props.history.push(path);
    }

    clickSchool(e) {
        let account = {...this.state.account}
        account.school_name = e.currentTarget.children[0].innerText;
        this.setState({account})
    }

    clickProf(e) {
        let account = {...this.state.account}
        account.user_name = e.currentTarget.children[0].innerText;
        this.setState({account})
    }

    clickProfButton() {
        let account = {...this.state.account}
        account.signingInAsProf = true;
        this.setState({account})
    }

    clickStudent() {
        let account = {...this.state.account}
        account.signingInAsProf = false;
        this.setState({account})
    }

    update(field) {
        return (e) => {
            let account = {...this.state.account}
            account[field] = e.currentTarget.value;
            this.setState({ account })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createUser(this.state.account)
        .then(() => this.props.history.push('/'));
    }

    renderErrors() {
        return(
            <ul>
                {this.props.signup_errors.map((error, i) => (
                    <li key={`error-${i}`} id={`signup-error-${i}`} className='signup-errors'>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    displayProfSearch() {
        if (this.state.account.signingInAsProf) {
            this.setState({searchProfDisplay: 'block'})
        }
    }

    hideProfSearch() {
        setTimeout(() => {
            this.setState({searchProfDisplay: 'none'})
        }, 250);
    }

    displaySchoolSearch() {
        this.setState({searchSchoolDisplay: 'block'})
    }

    hideSchoolSearch() {
        setTimeout(() => {
            this.setState({searchSchoolDisplay: 'none'})
        }, 250);
    }

    filterProfs(profs) {
        let filterdProfs = []
        for (let i = 0; i < profs.length; i++) {
            if (profs[i].name.includes(this.state.account.user_name)) {
                filterdProfs.push(profs[i])
            }
        }
        return filterdProfs
    }

    filterSchools(schools) {
        let filterdSchools = []
        for (let i = 0; i < schools.length; i++) {
            if (schools[i].name.includes(this.state.account.school_name)) {
                filterdSchools.push(schools[i])
            }
        }
        return filterdSchools
    }

    render() {
        const {profs, schools, schoolList} = this.props;
        if (profs.length === 0 || schoolList.length === 0) return null

        let accountTypeStyleStudent;
        let accountTypeStyleProf;

        let filteredProfs = this.filterProfs(profs)

        let filteredSchools = this.filterSchools(schoolList)

        if (this.state.account.signingInAsProf) {
            accountTypeStyleStudent = {backgroundColor: '#414345'}
            accountTypeStyleProf = {backgroundColor: '#00adee'}
        } else {
            accountTypeStyleStudent = {backgroundColor: '#00adee'}
            accountTypeStyleProf = {backgroundColor: '#414345'}
        }

        return (
            <form onSubmit={this.handleSubmit} className='page school-prof-form'>
                <div className='session-header'>Create an Account</div>
                <div className='anonymity-txt-row'>
                    <div className='anonymity-txt-col'>
                        <div className='anonymity-txt'>Signing up will still preserve anonymity! Although anybody can create and view professor ratings, signed in users can edit and delete the reviews they wrote.</div>
                    </div>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>ACCOUNT TYPE</div>
                    <div className='account-type-buttons'>
                        <input type='button' className="boolean-button" style={accountTypeStyleStudent} onClick={this.clickStudent} value='STUDENT' />
                        <input type='button' className="boolean-button" style={accountTypeStyleProf} onClick={this.clickProfButton} value='PROFESSOR' />
                    </div>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>SCHOOL</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.account.school_name}
                        onChange={this.update('school_name')}
                        onFocus={this.displaySchoolSearch}
                        onBlur={this.hideSchoolSearch}>
                    </input>
                </div>
                <div className='prof-form-school-search-container'>
                    <ul className='edit-profile-school-search'
                        style={{display: this.state.searchSchoolDisplay}}>
                        {
                            filteredSchools.map((school) => 
                            <li 
                                key={school.id}
                                className='school-li'
                                onClick={this.clickSchool}>
                                <div className='school-li-name'>{school.name}</div>
                                <div className='school-li-location'>{school.city}, {school.state}</div>
                            </li>)
                        }
                        <Link to='/schools/new' className='school-search-add-school'>DON'T SEE YOUR SCHOOL? CLICK HERE TO ADD IT TO RMP!</Link>
                    </ul>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>YOUR NAME</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.account.user_name}
                        onChange={this.update('user_name')}
                        onFocus={this.displayProfSearch}
                        onBlur={this.hideProfSearch}>
                    </input>
                </div>
                <div className='prof-form-school-search-container'>
                    <ul className='edit-profile-school-search'
                        style={{display: this.state.searchProfDisplay}}>
                        {
                            filteredProfs.map((prof, index) => 
                            <li 
                                key={index}
                                className='school-li'
                                onClick={this.clickProf}>
                                <div className='school-li-name'>{prof.name}</div>
                                <div className='school-li-location'>{schools[prof.school_id].name}</div>
                            </li>)
                        }
                        <Link to='/profs/new' className='school-search-add-school'>DON'T SEE YOUR NAME LISTED AS A PROF? CLICK HERE TO ADD IT TO RMP!</Link>
                    </ul>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>EMAIL</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.email}
                        onChange={this.update('email')}>
                    </input>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>CONFIRM EMAIL</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.email_confirm}
                        onChange={this.update('email_confirm')}>
                    </input>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>PASSWORD</div>
                    <input
                        className='school-prof-form-input'
                        type='password'
                        value={this.state.password}
                        onChange={this.update('password')}>
                    </input>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>CONFIRIM PASSWORD</div>
                    <input
                        className='school-prof-form-input'
                        type='password'
                        value={this.state.password_confirm}
                        onChange={this.update('password_confirm')}>
                    </input>
                </div>
                <div className='school-prof-form-submit-cancel'>
                    <div className='school-prof-form-submit-cancel-column'>
                        <input type='submit' value='Sign up' id='signup-button' className='school-prof-form-submit'></input>
                        <div id='signup-login-txt'>OR, ALREADY HAVE AN ACCOUNT?</div>
                        <button onClick={this.clickLogIn} id='signup-login-button'>Log in</button>
                        <Link to='/' className='school-prof-form-cancel'>CANCEL</Link>
                    </div>
                </div>
                {this.renderErrors()}
            </form>
        )
    }
}

export default Signup;