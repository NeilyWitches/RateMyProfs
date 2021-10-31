import React from 'react';
import { Link } from 'react-router-dom';

class ProfReviewShow extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.requestProfReview(this.props.profReview.id);
    };

    render() {
        return (
            <div>
                {this.props.profReview.body}
                {this.props.profReview.class}
                {this.props.profReview.grade}
                <Link to='/'></Link>
            </div>
        );
    };
};

export default ProfReviewShow;