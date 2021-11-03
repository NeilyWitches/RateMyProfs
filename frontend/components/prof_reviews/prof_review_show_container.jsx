import { connect } from 'react-redux';
import ProfReviewShow from './prof_review_show';
import { requestProfReview } from '../../actions/prof_review_actions';

const mSTP = (state, ownProps) => ({
    profReview: state.entities.profReviews[ownProps.match.params.profReviewId],
});

const mDTP = dispatch => ({
    requestProfReview: profReviewId => dispatch(requestProfReview(profReviewId)),
});

export default connect(mSTP, mDTP)(ProfReviewShow);