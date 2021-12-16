import { connect } from 'react-redux';
import { requestProf } from '../../actions/prof_actions';
import ProfReviewIndex from './prof_review_index';
import { createLike, deleteLike } from '../../actions/like_actions'
import { requestProfReviews } from '../../actions/prof_review_actions';

const mSTP = (state, ownProps) => {
    return {
        prof: state.entities.profs[ownProps.match.params.profId],
        profReviews: Object.values(state.entities.prof_reviews),
        likes: Object.values(state.entities.likes),
        currentUser: state.session.current_user,
    }
};

const mDTP = dispatch => ({
    requestProf: (profId) => dispatch(requestProf(profId)),
    requestProfReviews: profId => dispatch(requestProfReviews(profId)),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId)),
});

export default connect(mSTP, mDTP)(ProfReviewIndex);