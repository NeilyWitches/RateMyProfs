import React from 'react';
import { Link } from 'react-router-dom';
import ProfReviewShow from './prof_review_show';

class ProfReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.requestProf(this.props.match.params.profId)
    };

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.profId !== this.props.match.params.profId){
            this.props.requestProf(this.props.match.params.profId)
        }
    }

    render() {
        return (
            <div id='prof-review-index'>
                <h1>{this.props.prof.first_name}'s Reviews</h1>
                <ul>
                    {
                        this.props.profReviews.map(profReview => <ProfReviewShow key={profReview.id} profReview={profReview}/>)
                    }
                </ul>
                <Link to="/profReviews/new">New Prof Review</Link>
            </div>
        );
    };
};

export default ProfReviewIndex;