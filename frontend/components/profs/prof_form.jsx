import React from 'react';
import {Link} from 'react-router-dom';

class ProfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.prof;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
        .then(() => this.props.history.push(`/profs`));
    };

    componentDidMount() {
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

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='page school-prof-form'>
                <div className='school-prof-form-header'>Add New Prof</div>
                <div className='school-prof-form-important'>Important: Please use the search bar above to make sure that the professor does not already exist at this school.</div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>PROFESSOR'S FIRST NAME</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.first_name}
                        onChange={this.update('first_name')}>
                    </input>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>PROFESSOR'S LAST NAME</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.last_name}
                        onChange={this.update('last_name')}>
                    </input>
                </div>
                <div className='school-prof-form-row'>
                    <div className='school-prof-form-label'>DEPARTMENT</div>
                    <input
                        className='school-prof-form-input'
                        type='text'
                        value={this.state.subject}
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