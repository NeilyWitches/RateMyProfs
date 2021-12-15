import { connect } from 'react-redux';
import { requestProf } from '../../actions/prof_actions';
import ProfReviewIndex from './prof_review_index';
import { createLike } from '../../actions/like_actions'

const mSTP = (state, ownProps) => {
    return {
        prof: state.entities.profs[ownProps.match.params.profId],
        currentUser: state.session.current_user,
    }
};

const mDTP = dispatch => ({
    requestProf: (profId) => dispatch(requestProf(profId)),
    createLike: (like) => dispatch(createLike(like)),
});

export default connect(mSTP, mDTP)(ProfReviewIndex);