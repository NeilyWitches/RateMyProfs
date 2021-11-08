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

    updateInt(field) {
        return e => this.setState({ [field]: parseInt(e.currentTarget.value) })
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
        .then(() => this.props.history.push(`/profs/${this.state.prof_id}`));
    };

    render() {
        const scores = [0, 1, 2, 3, 4, 5]
        return (
            <form onSubmit={this.handleSubmit} id='prof-review-form'>
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
                Quality:
                {
                    scores.map((score, index) =>
                        <label key={index}>                        
                            <input
                            type='radio'
                            value={score}
                            checked={this.state.quality === score}
                            onChange={this.updateInt('quality')}
                        />
                        {score}
                        </label>
                    )
                }
                Difficulty:
                {
                    scores.map((score, index) =>
                        <label key={index}>
                            <input
                                type='radio'
                                value={score}
                                checked={this.state.difficulty === score}
                                onChange={this.updateInt('difficulty')}
                            />
                            {score}
                        </label>
                    )
                }
                <input type='submit'></input>
            </form>
        );
    };
};

export default ProfReviewForm;
