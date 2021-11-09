import React from 'react';
import ProfReviewForm from '../prof_reviews/prof_review_form';

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

    render() {
        return (
            <form onSubmit={this.handleSubmit} id='prof-form'>
                {this.props.formType}
                First Name:
                <input
                    type='text'
                    value={this.state.first_name}
                    onChange={this.update('first_name')}>
                </input>
                Last Name:
                <input
                    type='text'
                    value={this.state.last_name}
                    onChange={this.update('last_name')}>
                </input>
                Department:
                <input
                    type='text'
                    value={this.state.subject}
                    onChange={this.update('subject')}>
                </input>
                <input type='submit'></input>
            </form>
        )
    }
};

export default ProfForm;