import React from "react";
import {Link} from 'react-router-dom'

class SchoolForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.school;

        this.submitSchoolForm = this.submitSchoolForm.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    submitSchoolForm(e) {
        e.preventDefault();
        this.props.createSchool(this.state)
        .then(() => this.props.history.push(`/schools`));
    };

    componentDidMount() {
        this.props.clearErrors();
    }

    renderErrors() {
        return (
            <ul>
                {this.props.school_errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <form onSubmit={this.submitSchoolForm} className='page school-prof-form'>
                <div className='school-prof-form-header'>Add New School</div>
                <div className='school-prof-form-important'>Important: Please use the search bar above to make sure that the school does not already exist on Rate My Profs.</div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>NAME OF SCHOOL</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.name}
                        onChange={this.update('name')}>
                    </input>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>STATE</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.state}
                        onChange={this.update('state')}>
                    </input>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>CITY</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.city}
                        onChange={this.update('city')}>
                    </input>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>WEBSITE</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.website}
                        onChange={this.update('website')}>
                    </input>
                </div>
                <div className='school-prof-form-submit-cancel'>
                    <div className='school-prof-form-submit-cancel-column'>
                        <input type='submit' className='school-prof-form-submit'></input>
                        <Link to='/schools' className='school-prof-form-cancel'>CANCEL</Link>
                    </div>
                </div>
                {this.renderErrors()}
            </form>
        )
    }
}

export default SchoolForm;