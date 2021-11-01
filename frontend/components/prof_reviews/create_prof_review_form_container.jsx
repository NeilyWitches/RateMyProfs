import { connect } from 'react-redux';
import { createProfReview } from '../../actions/prof_review_actions';
import ProfReviewForm from './prof_review_form';

const mSTP = state => ({
    profReview: {
        body: '',
        klass: '',
        grade: '',
    },
    formType: 'Add Prof Review',
});

const mDTP = dispatch => ({
    action: profReview => dispatch(createProfReview(profReview)),
});

export default connect(mSTP, mDTP)(ProfReviewForm);