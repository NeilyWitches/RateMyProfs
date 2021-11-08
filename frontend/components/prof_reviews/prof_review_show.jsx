import React from 'react';

class ProfReviewShow extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                Body:
                {this.props.profReview.body}
                Class:
                {this.props.profReview.klass}
                Grade:
                {this.props.profReview.grade}
                Quality:
                {this.props.profReview.quality}
                Difficuly:
                {this.props.profReview.difficulty}
                Would Take Again:
                { this.props.profReview.take_again ? "Yes" : "No" }
                For Credit:
                { this.props.profReview.for_credit ? "Yes" : "No" }
                Textbook:
                { this.props.profReview.for_credit ? "Yes" : "No" }
                { this.props.profReview.attendance === true ? "Attendance: Mandatory" : "Attendance: Not Mandatory"}
            </div>
        );
    };
};

export default ProfReviewShow;