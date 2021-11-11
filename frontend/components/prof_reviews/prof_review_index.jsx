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

    getAvgQual(profReviews) {
        let sum = 0;
        for(let i = 0; i < profReviews.length; i++){
            sum += profReviews[i].quality
        }
        return sum / profReviews.length;
    }

    getAvgDiff(profReviews) {
        let sum = 0;
        for (let i = 0; i < profReviews.length; i++) {
            sum += profReviews[i].difficulty
        }
        return sum / profReviews.length;
    }

    getTakeAgRat(profReviews) {
        let count = 0;
        for (let i = 0; i < profReviews.length; i++) {
            if (profReviews[i].take_again) {
                count++
            }
        }
        return count / profReviews.length;
    }


    render() {
        if (!this.props.prof) return null;
        const profReviews = Object.values(this.props.prof.prof_reviews);
        
        const avgQual = this.getAvgQual(profReviews);
        const avgDiff = this.getAvgDiff(profReviews);
        const takeAgRat = this.getTakeAgRat(profReviews);

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