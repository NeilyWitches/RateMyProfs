import { connect } from 'react-redux';

import ProfReviewIndex from './prof_review_index';
import {requestProfReviews} from '../../actions/prof_review_actions';

const mSTP = state => {
    return {
        profReviews: Object.values(state.entities.profReviews),
}};

const mDTP = dispatch => ({
    requestProfReviews: () => dispatch(requestProfReviews()),
});

export default connect(mSTP, mDTP)(ProfReviewIndex);