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
            </div>
        );
    };
};

export default ProfReviewShow;