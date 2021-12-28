import React from 'react';
import {Link} from 'react-router-dom';
import Likes from '../likes/likes';

class ProfReviewShow extends React.Component {
    constructor(props) {
        super(props);

        this.clickDelete = this.clickDelete.bind(this)
    };

    clickDelete() {
        this.props.deleteProfReview(this.props.profReview.id)
    }

    styleQuality(qual) {
        if (qual < 3) {
            return 'rgb(255, 156, 156)'
        } else if (qual === 3) {
            return 'rgb(255, 254, 104)'
        }
    }

    displayMayEditHeader() {
        return (
            <div className='may-edit-header'>
                <div className='prof-review-show-prof-school'>
                    <strong className='prof-review-show-prof-name'>
                        {this.props.profWrittenAbout?.first_name} &nbsp;
                        {this.props.profWrittenAbout?.last_name}
                    </strong>
                    <div>•</div>
                    <div className='prof-review-show-prof-name'>{this.props.school?.name}</div>
                </div>
                <div className='prof-review-show-edit-delete'>
                    <Link
                        to={`/profReviews/edit/${this.props.userId}/${this.props.profReview.prof_id}/${this.props.profReview.id}`}
                        id='edit-prof-review-link'>
                        <i id='edit-icon' className="fas fa-pencil-alt"></i>Edit
                    </Link>
                    <div id='delete-prof-review' onClick={this.clickDelete}>
                        <i id='delete-icon' className="fas fa-trash-alt"></i>Delete
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let { attendance, grade, quality, difficulty, klass, updatedOn, for_credit, take_again, txt_book, body, tag1, tag2, tag3, } = this.props.profReview;

        if (!this.props.profReview) return null

        let attendanceDisplay;
        let gradeDisplay;
        let forCreditDisplay;
        let take_again_display;

        if (attendance === null) {
            attendanceDisplay = null;
        } else if (attendance === true) {
            attendanceDisplay = <div>Attendance: <strong>Mandataory</strong></div>
        } else {
            attendanceDisplay = <div>Attendance: <strong>Not Mandatory</strong></div>
        };

        if (for_credit === null) {
            forCreditDisplay = null;
        } else if (for_credit === true) {
            forCreditDisplay = <div>Attendance: <strong>Mandataory</strong></div>
        } else {
            forCreditDisplay = <div>Attendance: <strong>Not Mandatory</strong></div>
        };

        if (take_again === null) {
            take_again_display = null;
        } else if (take_again === true) {
            take_again_display = <div>Would Take Again: <strong>Yes</strong></div>
        } else {
            take_again_display = <div>Would Take Again: <strong>No</strong></div>
        };

        if (grade === 'Select' || grade === '') {
            gradeDisplay = null;
        } else {
            gradeDisplay = <div>Grade: <strong>{grade}</strong></div>
        }

        return (
            <div id='prof-review-show'>
                <div id='prof-review-show-qual-diff'>
                    <div id='prof-review-show-quality'>
                        <div id='prof-review-show-quality-label'>QUALITY</div>
                        <div id='prof-review-show-quality-num' style={{backgroundColor: this.styleQuality(quality)}}>{quality}</div>
                    </div>
                    <div id='prof-review-show-difficulty'>
                        <div id='prof-review-show-diff-label'>DIFFICULTY</div>
                        <div id='prof-review-show-diff-num'>{difficulty}</div>
                    </div>
                </div>
                <div id='prof-review'>
                    {this.props.mayEdit ? this.displayMayEditHeader() : null}
                    <div id='class-date'>
                        <div id='class'>{klass}</div>
                        <div id='prof-review-date'>{updatedOn}</div>
                    </div>
                    <div id='booleans'>
                        {forCreditDisplay}
                        {attendanceDisplay}
                        {take_again_display}
                        {gradeDisplay}
                        <div>Textbook: <strong>{txt_book ? "Yes" : "No"}</strong></div>
                    </div>
                    <div id='prof-review-comment'>
                        {body}
                    </div>
                    <div id='tags'>
                        { tag1 ? <div>{tag1}</div> : null }
                        { tag2 ? <div>{tag2}</div> : null }
                        { tag3 ? <div>{tag3}</div> : null }
                    </div>
                    { this.props.showLikes ? 

                    <Likes 
                    createLike={this.props.createLike} 
                    deleteLike={this.props.deleteLike}
                    currentUser={this.props.currentUser}
                    profReview={this.props.profReview}
                    prof={this.props.prof}
                    history={this.props.history}
                    likes={this.props.likes}/> :
                    
                    null}
                </div>
            </div>
        );
    };
};

export default ProfReviewShow;