import React from 'react';
import {range} from 'lodash';

class SchoolRatingForm extends React.Component {
    constructor(props) {
        super(props);
        this.nums = _.range(1, 11);
        this.categories = ["reputation", "location", "internet", "food", "opportunities", "facilities", "clubs", "social", "happiness", "safety"]
        this.state = {
            categories: this.initializeState(this.categories),
            body: '',
            characters: 350
        }

        this.clickCancel = this.clickCancel.bind(this);
        this.submitSchoolRating = this.submitSchoolRating.bind(this);
    }

    clickCancel() {
        this.props.history.goBack();
    }

    initializeState(categories) {
        let state = {}
        for (let i = 0; i < categories.length; i++) {
            state[categories[i]] = 5
        }
        return state
    }

    componentDidMount() {
        this.props.requestSchool(this.props.match.params.schoolId);
        this.props.clearErrors();
    }

    update(field) {
        if (field === 'body') {
            return e => {
                return this.setState({
                [field]: e.currentTarget.value,
                characters: 350 - e.currentTarget.value.length
            })}
        } else {
            return e => {
                let categories = {...this.state.categories}
                categories[field] = e.currentTarget.value
                this.setState({ categories })
            }
        }
    };

    submitSchoolRating(e) {
        e.preventDefault();
        this.props.createSchoolRating({...this.state.categories, comment: this.state.body, school_id: this.props.school.id})
    }

    renderErrors() {
        return (
            <ul>
                {this.props.school_rating_errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {

        const {school} = this.props;

        if (!school) return null;

        return (
            <div className='page'>
                <div id='prof-review-form-disclaimer'>
                    <div id='prof-review-disclaimer-header'>Rating Do's and Don'ts</div>
                    <div id='prof-review-disclaimer-do-dont'>
                        <div className='do'>
                            <div className='do-header'>Do</div>
                            <div className='do-body'>Double check your comments before posting. It never hurts to check your grammar.</div>
                        </div>
                        <div className='do'>
                            <div className='do-header'>Do</div>
                            <div className='do-body'>Refer to the rating categories to help you better elaborate your comments.</div>
                        </div>
                        <div className='do'>
                            <div className='do-header'>Don't</div>
                            <div className='do-body'>Reference existing comments or comments that have been deleted by our moderators.</div>
                        </div>
                    </div>
                </div>
                <div id='prof-review-form-header'>Give us an insider’s guide to {school.name}.</div>
                <form className='school-rating-form' 
                    id='school-rating-form'
                    onSubmit={this.submitSchoolRating}>
                    <div className='school-rating-form-nums'>
                        {this.nums.map(num => <div 
                            key={num}
                            className='school-rating-form-num'>
                            {num}
                        </div>)}
                    </div>
                    <div className='school-rating-form-labels'>
                        {this.categories.map((category, index) => <div
                            key={index}
                            className='school-rating-form-label'>
                            {category.toUpperCase()}
                        </div>)}
                    </div>
                    <div className='school-rating-form-rating-values'>
                        {Object.values(this.state.categories).map((value, index) => <div
                            key={index}
                            className='prof-review-form-state-qual'>
                            {value}
                        </div>)}
                    </div>
                    <div className='school-rating-form-inputs'>
                        {this.categories.map((category, index) => <input
                            key={index}
                            className='school-rating-form-input'
                            type='range'
                            min='1'
                            max='5'
                            onChange={this.update(category)}>
                        </input>)} 
                    </div>
                </form>
                <div className='school-rating-form-comment-num-label'>
                    <div className='school-rating-form-num'>11</div>
                    <div className='school-rating-form-label'>HERE'S YOUR CHANCE TO BE MORE SPECIFIC</div>
                </div>
                <textarea
                    className='school-rating-body'
                    value={this.state.body}
                    onChange={this.update('body')}>
                </textarea>
                <div className='school-rating-form-characters-left'>{this.state.characters} characters left</div>
                <input 
                    className='school-rating-form-submit' 
                    type='submit'
                    form='school-rating-form'>
                </input>
                <div className='school-rating-form-cancel' onClick={this.clickCancel}>CANCEL</div>
                {this.renderErrors()}
            </div>
        )
    }
}

export default SchoolRatingForm;