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
            </div>
        );
    };
};

export default ProfReviewShow;