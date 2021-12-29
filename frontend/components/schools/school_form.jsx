import React from "react";
import {Link} from 'react-router-dom'

class SchoolForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.school;

        this.submitSchoolForm = this.submitSchoolForm.bind(this);
        this.clickCancel = this.clickCancel.bind(this);
    }

    clickCancel() {
        this.props.history.goBack()
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
                    {this.props.school_errors.includes("Name can't be blank") ? <div className='prof-form-school-name-error error'>School name cannot be blank.</div> : null }
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>STATE</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.state}
                        onChange={this.update('state')}>
                    </input>
                    {this.props.school_errors.includes("State can't be blank") ? <div className='prof-form-school-name-error error'>State cannot be blank.</div> : null }
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>CITY</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.city}
                        onChange={this.update('city')}>
                    </input>
                    {this.props.school_errors.includes("City can't be blank") ? <div className='prof-form-school-name-error error'>City cannot be blank.</div> : null }
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>WEBSITE</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.website}
                        onChange={this.update('website')}>
                    </input>
                    {this.props.school_errors.includes("Website can't be blank") ? <div className='prof-form-school-name-error error'>Website cannot be blank.</div> : null }
                </div>
                <div className='school-prof-form-submit-cancel'>
                    <div className='school-prof-form-submit-cancel-column'>
                        <input type='submit' className='school-prof-form-submit'></input>
                        <div className="school-prof-form-cancel" onClick={this.clickCancel}>CANCEL</div>
                    </div>
                </div>
            </form>
        )
    }
}

export default SchoolForm;