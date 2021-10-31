import React from 'react';
import { Link } from 'react-router-dom';

import ProfReviewIndexItem from './prof_review_index_item';

class ProfReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.requestProfReviews();
    };

    render() {
        const { profReviews, deleteProfReview } = this.props;
        return (
            <div>
                <ul>
                    {
                        profReviews.map(profReview => <ProfReviewIndexItem profReview={profReview} deleteProfReview={deleteProfReview} />)
                    }
                </ul>
                <Link to="/profReviews/new">New Prof Review</Link>
            </div>
        );
    };
};

export default ProfReviewIndex;