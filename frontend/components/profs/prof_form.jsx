import React from 'react';

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
            <form onSubmit={this.handleSubmit} id='prof-form'>
                <div id='prof-form-header'>{this.props.formType}</div>
                <div id='prof-form-important'>Important: Please make sure that the professor does not already exist in the "All Profs" page.</div>
                
                <label>PROFESSOR'S FIRST NAME</label>
                <input
                    type='text'
                    value={this.state.first_name}
                    onChange={this.update('first_name')}>
                </input>
                <label>PROFESSOR'S LAST NAME</label>
                <input
                    type='text'
                    value={this.state.last_name}
                    onChange={this.update('last_name')}>
                </input>
                <label>DEPARTMENT</label>
                <input
                    type='text'
                    value={this.state.subject}
                    onChange={this.update('subject')}>
                </input>
                <input type='submit' id='prof-form-submit'></input>
                {this.renderErrors()}
            </form>
        )
    }
};

export default ProfForm;