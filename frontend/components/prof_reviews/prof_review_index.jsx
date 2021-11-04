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
        return (
            <div>
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