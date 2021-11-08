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
            attendanceDisplay = 'Attendance: Mandatory'
        } else {
            attendanceDisplay = 'Attendance: Not Mandatory'
        };

        if (this.props.profReview.grade === 'Select') {
            gradeDisplay = null;
        } else {
            gradeDisplay = `Grade: ${this.props.profReview.grade}`
        }

        return (
            <div>
                Body:
                {this.props.profReview.body}
                Class:
                {this.props.profReview.klass}
                {gradeDisplay}
                Quality:
                {this.props.profReview.quality}
                Difficuly:
                {this.props.profReview.difficulty}
                Would Take Again:
                { this.props.profReview.take_again ? "Yes" : "No" }
                For Credit:
                { this.props.profReview.for_credit ? "Yes" : "No" }
                Textbook:
                { this.props.profReview.txt_book ? "Yes" : "No" }
                { attendanceDisplay }
            </div>
        );
    };
};

export default ProfReviewShow;