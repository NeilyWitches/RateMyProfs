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
        if (!this.props.prof) return null;
        const {profReviews} = this.props;
        return (
            <div id='prof-review-index'>
                <h1>{this.props.prof.first_name}'s Reviews</h1>
                <ul>
                    {
                        profReviews.map((profReview, index) => <ProfReviewShow key={index} profReview={profReview}/>)
                    }
                </ul>
                <Link to={`/profReviews/new/${this.props.prof.id}`}>New Prof Review</Link>
            </div>
        );
    };
};

export default ProfReviewIndex;