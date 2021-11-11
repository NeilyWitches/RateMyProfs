import React from 'react';

class ProfReviewShow extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        let attendanceDisplay;
        let gradeDisplay;

        if (this.props.profReview.attendance === null) {
            attendanceDisplay = null;
        } else if (this.props.profReview.attendance === true) {
            attendanceDisplay = <div>Attendance: <strong>Mandataory</strong></div>
        } else {
            attendanceDisplay = <div>Attendance: <strong>Not Mandatory</strong></div>
        };

        if (this.props.profReview.grade === 'Select' || this.props.profReview.grade === '') {
            gradeDisplay = null;
        } else {
            gradeDisplay = <div>Grade: <strong>{this.props.profReview.grade}</strong></div>
        }

        return (
            <div id='prof-review-show'>
                <div id='prof-review-show-qual-diff'>
                    <div id='prof-review-show-quality'>
                        <div id='prof-review-show-quality-label'>QUALITY</div>
                        <div id='prof-review-show-quality-num'>{this.props.profReview.quality}</div>
                    </div>
                    <div id='prof-review-show-difficulty'>
                        <div id='prof-review-show-diff-label'>DIFFICULTY</div>
                        <div id='prof-review-show-diff-num'>{this.props.profReview.difficulty}</div>
                    </div>
                </div>
                <div id='prof-review'>
                    <div id='class-date'>
                        <div id='class'>{this.props.profReview.klass}</div>
                        <div id='prof-review-date'>{this.props.profReview.updatedOn}</div>
                    </div>
                    <div id='booleans'>
                        <div>For Credit: <strong>{this.props.profReview.for_credit ? "Yes" : "No"}</strong></div>
                        {attendanceDisplay}
                        <div>Would take again: <strong>{this.props.profReview.take_again ? "Yes" : "No"}</strong></div>
                        {gradeDisplay}
                        <div>Textbook: <strong>{this.props.profReview.txt_book ? "Yes" : "No"}</strong></div>
                    </div>
                    <div id='prof-review-comment'>
                        {this.props.profReview.body}
                    </div>
                    <div id='tags'>
                        { this.props.profReview.tag1 ? <div>{this.props.profReview.tag1}</div> : null }
                        { this.props.profReview.tag2 ? <div>{this.props.profReview.tag2}</div> : null }
                        { this.props.profReview.tag3 ? <div>{this.props.profReview.tag3}</div> : null }
                    </div>
                </div>
            </div>
        );
    };
};

export default ProfReviewShow;