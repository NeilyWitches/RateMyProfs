import React from 'react';
import {Link} from 'react-router-dom';

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
        if (field === 'body') {
            return e => {
                return this.setState({
                [field]: e.currentTarget.value,
                characters: 350 - e.currentTarget.value.length
            })}
        } else {
            return e => this.setState({ [field]: e.currentTarget.value })
        }
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

    renderErrors() {
        
        return (
            <ul id='prof-review-form-errors'>
                {this.props.prof_review_errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    componentDidMount() {
        this.setState({ characters: 350 })
    }

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
            <div id='prof-review-form-container'>
                <div id='prof-review-form-disclaimer'>
                    <div id='prof-review-disclaimer-header'>Rating Do's and Don'ts</div>
                    <div id='prof-review-disclaimer-do-dont'>
                        <div className='do'>
                            <div className='do-header'>Do</div>
                            <div className='do-body'>Discuss the professor’s professional abilities including teaching style and ability to convey the material clearly.</div>
                        </div>
                        <div className='do'>
                            <div className='do-header'>Do</div>
                            <div className='do-body'>Double check your comments before posting. Course codes must be accurate, and it doesn’t hurt to check grammar.</div>
                        </div>
                        <div className='do'>
                            <div className='do-header'>Don't</div>
                            <div className='do-body'>Use profanity, name-calling, or derogatory terms. And, don’t claim that the professor shows bias or favoritism for or against students.</div>
                        </div>
                    </div>
                </div>
                <div id='prof-review-form-header'>{this.props.formType}{this.props.prof.first_name} {this.props.prof.last_name}</div>
                <form onSubmit={this.handleSubmit} id='prof-review-form'>
                    <div id='prof-review-form-1' className='prof-review-form-row'>
                        <div id='prof-review-form-num-1' className='prof-review-form-number'>1</div>
                        <div id='prof-review-form-1-label'>
                            <div id='prof-review-form-1-label-header'><strong>COURSE CODE</strong></div>
                            <div id='prof-review-form-1-label-body'>Please make sure this is accurate, examples: COS126, ECON238</div>
                        </div>
                        <input
                            id='prof-review-form-class-input'
                            type='text'
                            value={this.state.klass}
                            placeholder="Enter code"
                            onChange={this.update('klass')}>
                        </input>
                    </div>
                    <div id='prof-review-form-2' className='prof-review-form-row'>
                        <div className='prof-review-form-number'>2</div>
                        <div className='prof-review-form-label'><strong>RATE YOUR PROFESSOR</strong></div>
                        <div className='after-label'>
                            <div className='prof-review-form-state-qual'>{this.state.quality}</div>
                            <input
                                className='slider'
                                type='range'
                                min='1'
                                max='5'
                                onChange={this.update('quality')}
                            />
                        </div>
                    </div>
                    <div id='prof-review-form-3' className='prof-review-form-row'>
                        <div className='prof-review-form-number'>3</div>
                        <div className='prof-review-form-label' id="prof-review-form-label-3"><strong>LEVEL OF DIFFICULTY</strong></div>
                        <div className='after-label'>
                            <div id='diff-state' className='prof-review-form-state-qual'>{this.state.difficulty}</div>
                            <input
                                className='slider'
                                type='range'
                                min='1'
                                max='5'
                                onChange={this.update('difficulty')}
                            />
                        </div>
                    </div>
                    <div id='prof-review-form-4' className='prof-review-form-row'>
                        <div className='prof-review-form-number'>4</div>
                        <div className='prof-review-form-label'><strong>WOULD YOU TAKE THIS PROF AGAIN?</strong></div>
                        <div className='after-label'>
                            <input type='button' className="boolean-button" style={inputStyleTakeAgainYes} onClick={this.makeTrue('take_again')} value='YEAH' />
                            <input type='button' className="boolean-button" style={inputStyleTakeAgainNo} onClick={this.makeFalse('take_again')} value='UM, NO.' />
                        </div>
                    </div>
                    <div id='prof-review-form-5' className='prof-review-form-row'>
                        <div className='prof-review-form-number'>5</div>
                        <div className='prof-review-form-label'><strong>WAS THIS CLASS TAKEN FOR CREDIT?</strong></div>
                        <div className='after-label'>
                            <input className="boolean-button" type='button' style={inputStyleForCreditYes} onClick={this.makeTrue('for_credit')} value='YEAH' />
                            <input className="boolean-button" type='button' style={inputStyleForCreditNo} onClick={this.makeFalse('for_credit')} value='UM, NO.' />
                        </div>
                    </div>
                    <div id='prof-review-form-6' className='prof-review-form-row'>
                        <div className='prof-review-form-number'>6</div>
                        <div className='prof-review-form-label' id='prof-review-form-label-6'><strong>TEXTBOOK USE</strong></div>
                        <div className='after-label'>
                            <input className="boolean-button" type='button' style={inputStyleTextBookYes} onClick={this.makeTrue('txt_book')} value='YEAH' />
                            <input className="boolean-button" type='button' style={inputStyleTextBookNo} onClick={this.makeFalse('txt_book')} value='UM, NO.' />
                        </div>
                    </div>
                    <div id='prof-review-form-7' className='prof-review-form-row'>
                        <div className='prof-review-form-number'>7</div>
                        <div className='prof-review-form-label' id='prof-review-form-label-7'><strong>ATTENDANCE</strong> (Optional)</div>
                        <div className='after-label'>
                            <input type='button' className="boolean-button" style={inputStyleAttendanceYes} onClick={this.makeTrue('attendance')} value='MANDATORY' />
                            <input type='button' className="boolean-button" style={inputStyleAttendanceNo} onClick={this.makeFalse('attendance')} value='NOT MANDATORY' />
                        </div>
                    </div>
                    <div id='prof-review-form-8' className='prof-review-form-row'>
                        <div className='prof-review-form-number'>8</div>
                        <div className='prof-review-form-label' id='prof-review-form-label-8'><strong>GRADE RECEIVED</strong> (Optional)</div>
                        <select id='prof-review-form-grades' name='grades' onChange={this.update('grade')} defaultValue={'Select'}>
                            {
                                grades.map((grade, index) =>
                                    <option
                                        key={index}
                                        value={grade}>
                                        {grade}
                                    </option>)
                            }
                        </select>
                    </div>
                    <div id='prof-review-form-9'>
                        <div className='prof-review-form-number'>9</div>
                        <div className='prof-review-form-label'><strong>SELECT UP TO 3 TAGS THAT BEST DESCRIBE THIS PROF</strong> (Optional) <br/> Choose carefully - the fate of future students lies in your hands.</div>
                    </div>
                    <div id='prof-review-form-tags'>
                        {
                            this.tags.map((tag, index) => <input
                                key={index} type='button'
                                style={{ backgroundColor: this.tagStyles[index] }}
                                onClick={this.changeColor(index)}
                                value={tag} />)
                        }
                    </div>
                    <div id='prof-review-form-10'>
                        <div className='prof-review-form-number'>10</div>
                        <div className='prof-review-form-label'>HERE'S YOUR CHANCE TO BE MORE SPECIFIC</div>
                    </div>
                    <textarea
                        id='prof-review-form-body'
                        value={this.state.body}
                        onChange={this.update('body')}>
                    </textarea>
                    <div id='prof-review-form-characters'>{this.state.characters} characters left</div>
                    <input id='prof-review-form-submit' type='submit'></input>
                </form>
                <Link to={`/profs/${this.props.match.params.profId}`} id='prof-review-form-cancel'>CANCEL</Link>
                {this.renderErrors()}
            </div>
        );
    };
};

export default ProfReviewForm;
