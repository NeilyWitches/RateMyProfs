import React from 'react';
import {Link} from 'react-router-dom';
import Likes from '../likes/likes';

class ProfReviewShow extends React.Component {
    constructor(props) {
        super(props);
    };

    displayEdit() {
        return (
            <div>
                <Link
                    to={`/profReviews/edit/${this.props.profReview.id}/${this.props.userId}/${this.props.profReview.prof_id}`}
                    id='edit-prof-review-link'><i id='edit-icon' className="fas fa-pencil-alt"></i>Edit</Link>
            </div>
        )
    }

    displayDelete() {
        return (
            <div id='delete-prof-review' onClick={this.props.clickDelete(this.props.profReview.id)}>
                <i className="fas fa-trash-alt"></i>
                <div id='delete-prof-review-txt'>Delete</div>
            </div>
        )
    }

    styleQuality(qual) {
        if (qual < 3) {
            return 'rgb(255, 156, 156)'
        } else if (qual === 3) {
            return 'rgb(255, 254, 104)'
        }
    }

    render() {
        let { attendance, grade, quality, difficulty, klass, updatedOn, for_credit, take_again, txt_book, body, tag1, tag2, tag3, } = this.props.profReview;

        let attendanceDisplay;
        let gradeDisplay;

        if (attendance === null) {
            attendanceDisplay = null;
        } else if (attendance === true) {
            attendanceDisplay = <div>Attendance: <strong>Mandataory</strong></div>
        } else {
            attendanceDisplay = <div>Attendance: <strong>Not Mandatory</strong></div>
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
                    <div id='class-date'>
                        <div id='class'>{klass}</div>
                        {this.props.mayEdit ? this.displayEdit() : null}
                        {this.props.mayDelete ? this.displayDelete() : null}
                        <div id='prof-review-date'>{updatedOn}</div>
                    </div>
                    <div id='booleans'>
                        <div>For Credit: <strong>{for_credit ? "Yes" : "No"}</strong></div>
                        {attendanceDisplay}
                        <div>Would take again: <strong>{take_again ? "Yes" : "No"}</strong></div>
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