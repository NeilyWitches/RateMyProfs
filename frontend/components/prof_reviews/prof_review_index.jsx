import React from 'react';
import { Link } from 'react-router-dom';
import ProfReviewShow from './prof_review_show';

class ProfReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.requestProfReviews();
    };

    render() {
        const { profReviews } = this.props;
        if (!profReviews) return null;
        return (
            <div id='prof-review-index'>
                <h1>Prof Review Index</h1>
                <ul>
                    {
                        profReviews.map(profReview => <ProfReviewShow key={profReview.id} profReview={profReview}/>)
                    }
                </ul>
                <Link to="/profReviews/new">New Prof Review</Link>
            </div>
        );
    };
};

export default ProfReviewIndex;