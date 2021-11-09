import { connect } from 'react-redux';
import { createProfReview } from '../../actions/prof_review_actions';
import ProfReviewForm from './prof_review_form';

const mSTP = (state, ownProps, { errors }) => {
    if (state.session.current_user) {
        return {
            profReview: {
                body: '',
                klass: '',
                grade: 'Select',
                quality: 5,
                difficulty: 5,
                take_again: true,
                for_credit: true,
                txt_book: true,
                attendance: null,
                tag1: null,
                tag2: null,
                tag3: null,
                prof_id: ownProps.match.params.profId,
                author_id: state.session.current_user.id,
            },
            formType: 'Add Prof Review',
            prof_review_errors: errors.prof_review,
        }
    } else {
        return {
            profReview: {
                body: '',
                klass: '',
                grade: null,
                quality: 5,
                difficulty: 5,
                take_again: true,
                for_credit: true,
                txt_book: true,
                attendance: null,
                tag1: null,
                tag2: null,
                tag3: null,
                prof_id: ownProps.match.params.profId,
            },
            formType: 'Add Prof Review',
            prof_review_errors: errors.prof_review,
        }
    }
};

const mDTP = dispatch => ({
    action: profReview => dispatch(createProfReview(profReview)),
});

export default connect(mSTP, mDTP)(ProfReviewForm);