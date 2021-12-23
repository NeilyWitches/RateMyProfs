import React from 'react';
import {Link} from 'react-router-dom';

class ProfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prof: {
                first_name: this.props.prof.first_name,
                last_name: this.props.prof.last_name,
                subject: this.props.prof.subject,
                school_name: this.props.prof.school_name,
            },
            searchDisplay: 'none'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clickSchool = this.clickSchool.bind(this)
        this.displaySearch = this.displaySearch.bind(this)
        this.hideSearch = this.hideSearch.bind(this)
    }

    update(field) {
        return e => {
            let prof = {...this.state.prof}
            prof[field] = e.currentTarget.value;
            this.setState({prof})
        }
    };

    clickSchool(e) {
        let prof = {...this.state.prof}
        prof.school_name = e.currentTarget.children[0].innerText;
        this.setState({prof})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state.prof)
        .then(() => this.props.history.push(`/profs`));
    };

    componentDidMount() {
        this.props.requestSchools()
        this.props.clearErrors();
    }

    renderErrors() {
        return (
            <ul>
                {this.props.prof_errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    displaySearch() {
        this.setState({searchDisplay: 'block'})
    }

    hideSearch() {
        setTimeout(() => {
            this.setState({searchDisplay: 'none'})
        }, 250);
    }

    filterSchools(schools) {
        let filterdSchools = []
        for (let i = 0; i < schools.length; i++) {
            if (schools[i].name.includes(this.state.prof.school_name)) {
                filterdSchools.push(schools[i])
            }
        }
        return filterdSchools
    }

    render() {
        const { schools } = this.props;
        let filteredSchools = this.filterSchools(schools);

        return (
            <form onSubmit={this.handleSubmit} className='page school-prof-form'>
                <div className='school-prof-form-header'>Add New Prof</div>
                <div className='school-prof-form-important'>Important: Please use the search bar above to make sure that the professor does not already exist at this school.</div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>NAME OF SCHOOL</div>
                    <input
                        onFocus={this.displaySearch}
                        onBlur={this.hideSearch}
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.prof.school_name}
                        onChange={this.update('school_name')}>
                    </input>
                </div>
                <div className='prof-form-school-search-container'>
                    <ul className='edit-profile-school-search'
                        style={{display: this.state.searchDisplay}}>{
                        filteredSchools.map((school) => 
                        <li 
                            key={school.id}
                            className='school-li'
                            onClick={this.clickSchool}>
                            <div className='school-li-name'>{school.name}</div>
                            <div className='school-li-location'>{school.city}, {school.state}</div>
                        </li>)
                    }</ul>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>PROFESSOR'S FIRST NAME</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.prof.first_name}
                        onChange={this.update('first_name')}>
                    </input>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>PROFESSOR'S LAST NAME</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.prof.last_name}
                        onChange={this.update('last_name')}>
                    </input>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>DEPARTMENT</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.prof.subject}
                        onChange={this.update('subject')}>
                    </input>
                </div>
                <div className='school-prof-form-submit-cancel'>
                    <div className='school-prof-form-submit-cancel-column'>
                        <input type='submit' className='school-prof-form-submit'></input>
                        <Link to='/profs' className='school-prof-form-cancel'>CANCEL</Link>
                    </div>
                </div>
                {this.renderErrors()}
            </form>
        )
    }
};

export default ProfForm;