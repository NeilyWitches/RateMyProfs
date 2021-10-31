import React from 'react';

class ProfReviewForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.profReview
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    };

    handleSubmit(e) {
        this.props.action(this.state);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.props.formType}
            <textarea
                value={this.state.body}
                onChange={this.update('body')}>
            </textarea>
            <input
                type='text'
                value={this.state.class}
                onChange={this.update('class')}>
            </input>
            <input
                type='text'
                value={this.state.grade}
                onChange={this.update('grade')}>
            </input>
            </form>
        );
    };
};

export default ProfReviewForm;