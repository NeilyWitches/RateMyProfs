import { connect } from 'react-redux';
import { createProfReview } from '../../actions/prof_review_actions';
import ProfReviewForm from './prof_review_form';

const mSTP = (state, ownProps) => ({
    profReview: {
        body: '',
        klass: '',
        grade: '',
        prof_id: ownProps.match.params.profId,
        author_id: state.session.current_user.id
    },
    formType: 'Add Prof Review',
});

const mDTP = dispatch => ({
    action: profReview => dispatch(createProfReview(profReview)),
});

export default connect(mSTP, mDTP)(ProfReviewForm);