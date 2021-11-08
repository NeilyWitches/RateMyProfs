import React from 'react';

class ProfReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.profReview
        this.handleSubmit = this.handleSubmit.bind(this);
        this.tags = [
            'GIVES GOOD FEEDBACK', 'RESPECTED', 'LOTS OF HOMEWORK',
            'ACCESSIBLE OUTSIDE OF CLASS', 'GET READY TO READ',
            'PARTICIPATION MATTERS', "SKIP CLASS YOU WON'T PASS.",
            "INSPIRATIONAL", "GRADED BY FEW THINGS", "TEST HEAVY",
            "GROUP PROJECTS", "CLEAR GRADING CRITERIA", "HILARIOUS",
            "BEWARE OF POP QUIZZES", "AMAZING LECTURES", "LECTURE HEAVY",
            "CARING", "EXTRA CREDIT", "SO MANY PAPERS", "TOUGH GRADER"
        ]
        this.tagStyles = [];
        this.populateTagStyles();
    };

    populateTagStyles() {

        for (let i = 0; i < this.tags.length; i++) {
            this.tagStyles.push('gray')
        }
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    };

    makeTrue(field) {
        return () => this.setState({ [field]: true })
    }

    makeFalse(field) {
        return () => this.setState({ [field]: false })
    }

    changeColor(index) {
        return () => {
            if (this.tagStyles[index] === 'gray' && this.num_blues < 3) {
                this.tagStyles[index] = 'blue'
                this.forceUpdate()
            } else {
                this.tagStyles[index] = 'gray'
                this.forceUpdate()
            }
        }
    };

    setTags() {
        let tag_index = [];
        if (this.num_blues === 0) {
            return
        } else if (this.num_blues === 1) {
            for (let i = 0; i < this.tagStyles.length; i++) {
                if (this.tagStyles[i] === 'blue') {
                    tag_index.push(i)
                }
            }
            this.state.tag1 = this.tags[tag_index[0]]
        } else if (this.num_blues === 2) {
            for (let i = 0; i < this.tagStyles.length; i++) {
                if (this.tagStyles[i] === 'blue') {
                    tag_index.push(i)
                }
            }
            this.state.tag1 = this.tags[tag_index[0]];
            this.state.tag2 = this.tags[tag_index[1]];
        } else {
            for (let i = 0; i < this.tagStyles.length; i++) {
                if (this.tagStyles[i] === 'blue') {
                    tag_index.push(i)
                }
            }
            this.state.tag1 = this.tags[tag_index[0]];
            this.state.tag2 = this.tags[tag_index[1]];
            this.state.tag3 = this.tags[tag_index[2]];
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setTags();
        this.props.action(this.state)
        .then(() => this.props.history.push(`/profs/${this.state.prof_id}`));
    };

    render() {
        this.num_blues = 0;
        for (let i = 0; i < this.tagStyles.length; i++) {
            if (this.tagStyles[i] === 'blue') {
                this.num_blues++
            }
        }

        const grades =  [
            'A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+',
            'C', 'C-', 'D+', 'D', 'D-', 'F', 
            'Drop / Withdrawal', 'Incomplete', 
            'Not sure yet', 'Rather not say', 
            'Audit / No grade', 'Select'
        ];

        let inputStyleTakeAgainYes;
        let inputStyleTakeAgainNo;
        let inputStyleForCreditYes;
        let inputStyleForCreditNo;
        let inputStyleTextBookYes;
        let inputStyleTextBookNo;
        let inputStyleAttendanceYes;
        let inputStyleAttendanceNo;

        if (this.state.take_again) {
            inputStyleTakeAgainYes = { backgroundColor: 'red' }
        } else {
            inputStyleTakeAgainYes = { backgroundColor: 'gray' }
        }

        if (!this.state.take_again) {
            inputStyleTakeAgainNo = { backgroundColor: 'red' }
        } else {
            inputStyleTakeAgainNo = { backgroundColor: 'gray' }
        }

        if (this.state.for_credit) {
            inputStyleForCreditYes = { backgroundColor: 'red' }
        } else {
            inputStyleForCreditYes = { backgroundColor: 'gray' }
        }

        if (!this.state.for_credit) {
            inputStyleForCreditNo = { backgroundColor: 'red' }
        } else {
            inputStyleForCreditNo = { backgroundColor: 'gray' }
        }

        if (this.state.txt_book) {
            inputStyleTextBookYes = { backgroundColor: 'red' }
        } else {
            inputStyleTextBookYes = { backgroundColor: 'gray' }
        }

        if (!this.state.txt_book) {
            inputStyleTextBookNo = { backgroundColor: 'red' }
        } else {
            inputStyleTextBookNo = { backgroundColor: 'gray' }
        }

        if (this.state.attendance === null) {
            inputStyleAttendanceNo = { backgroundColor: 'gray' }
            inputStyleAttendanceYes = {backgroundColor: 'gray'}
        } else if (this.state.attendance === true) {
            inputStyleAttendanceYes = { backgroundColor: 'red' }
            inputStyleAttendanceNo = { backgroundColor: 'gray' }
        } else {
            inputStyleAttendanceYes = { backgroundColor: 'gray' }
            inputStyleAttendanceNo = { backgroundColor: 'red' }
        };

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
                Grade (Optional):
                <select name='grades' onChange={this.update('grade')} defaultValue={'Select'}>
                    {
                        grades.map((grade, index) => 
                            <option 
                                key={index}
                                value={grade}>
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
                Would you take this prof again?
                <input type='button' style={inputStyleTakeAgainYes} onClick={this.makeTrue('take_again')} value='yes'/>
                <input type='button' style={inputStyleTakeAgainNo} onClick={this.makeFalse('take_again')} value='no' />
                <br/>
                Was this class taken for credit?
                <input type='button' style={inputStyleForCreditYes} onClick={this.makeTrue('for_credit')} value='yes' />
                <input type='button' style={inputStyleForCreditNo} onClick={this.makeFalse('for_credit')} value='no' />
                <br />
                Was getting the textbook required?
                <input type='button' style={inputStyleTextBookYes} onClick={this.makeTrue('txt_book')} value='yes' />
                <input type='button' style={inputStyleTextBookNo} onClick={this.makeFalse('txt_book')} value='no' />
                <br />
                Was attendance mandatory? (Optional)
                <input type='button' style={inputStyleAttendanceYes} onClick={this.makeTrue('attendance')} value='yes' />
                <input type='button' style={inputStyleAttendanceNo} onClick={this.makeFalse('attendance')} value='no' />
                Tags:
                {
                    this.tags.map((tag, index) => <input 
                    key={index} type='button' 
                    style={{backgroundColor: this.tagStyles[index]}} 
                    onClick={this.changeColor(index)}
                    value={tag} />)
                }
                <input type='submit'></input>
            </form>
        );
    };
};

export default ProfReviewForm;
