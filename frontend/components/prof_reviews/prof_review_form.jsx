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

    makeTrue(field) {
        return () => this.setState({ [field]: true })
    }

    makeFalse(field) {
        return () => this.setState({ [field]: false })
    }

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
                <input type='submit'></input>
            </form>
        );
    };
};

export default ProfReviewForm;
