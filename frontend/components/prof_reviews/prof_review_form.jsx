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
        e.preventDefault();
        console.log(this.props);
        this.props.action(this.state)
        .then(() => this.props.history.push('/'));
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
                    value={this.state.klass}
                    onChange={this.update('klass')}>
                </input>
                <input
                    type='text'
                    value={this.state.grade}
                    onChange={this.update('grade')}>
                </input>
                <input type='submit'></input>
            </form>
        );
    };
};

export default ProfReviewForm;