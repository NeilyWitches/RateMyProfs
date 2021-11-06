import { connect } from 'react-redux';
import { requestProf } from '../../actions/prof_actions';
import ProfReviewIndex from './prof_review_index';

const mSTP = (state, ownProps) => {
    return {
        prof: state.entities.profs[ownProps.match.params.profId],
        profReviews: Object.values(state.entities.profReviews),
    }
};

const mDTP = dispatch => ({
    requestProf: (profId) => dispatch(requestProf(profId)),
});

export default connect(mSTP, mDTP)(ProfReviewIndex);