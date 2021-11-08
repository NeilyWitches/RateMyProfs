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
        const grades =  [
                            'A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+',
                            'C', 'C-', 'D+', 'D', 'D-', 'F', 
                            'Drop / Withdrawal', 'Incomplete', 
                            'Not sure yet', 'Rather not say', 
                            'Audit/No grade'
                        ];

        return (
            <form onSubmit={this.handleSubmit} id='prof-review-form'>
                {this.props.formType}
                Body:
                <textarea
                    value={this.state.body}
                    onChange={this.update('body')}>
                </textarea>
                Class:
                <input
                    type='text'
                    value={this.state.klass}
                    onChange={this.update('klass')}>
                </input>
                Grade:
                <select name='grades' onChange={this.update('grade')}>
                    {
                        grades.map((grade, index) => 
                            <option 
                                key={index}
                                value={grade}
                                selected={grade === this.state.grade}>
                                {grade}
                            </option>)
                    }
                </select>
                <br/>
                <label>
                    Quality: {this.state.quality}
                    <input
                        type='range'
                        min='1'
                        max='5'
                        onChange={this.update('quality')} 
                    />
                </label>
                <label>
                    Difficulty: {this.state.difficulty}
                    <input
                        type='range'
                        min='1'
                        max='5'
                        onChange={this.update('difficulty')}
                    />
                </label>
                <br/>
                {/* <label>
                    Would you take this prof again? {this.state.take_again}
                    <button onClick={this.setState({take_again: true})}>Yes</button>
                    <button onClick={this.setState({take_again: false})}>No</button>
                </label> */}
                <input type='submit'></input>
            </form>
        );
    };
};

export default ProfReviewForm;
