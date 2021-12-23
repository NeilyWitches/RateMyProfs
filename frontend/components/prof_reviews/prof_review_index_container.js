import { connect } from 'react-redux';
import { requestProf } from '../../actions/prof_actions';
import ProfReviewIndex from './prof_review_index';
import { createLike, deleteLike } from '../../actions/like_actions'
import { requestProfReviews } from '../../actions/prof_review_actions';
import { createProfSave, deleteProfSave } from '../../actions/prof_save_actions';

const mSTP = (state, ownProps) => {
    return {
        prof: state.entities.profs[ownProps.match.params.profId],
        profReviews: Object.values(state.entities.prof_reviews),
        likes: Object.values(state.entities.likes),
        currentUser: state.session.current_user,
        profSaves: Object.values(state.entities.prof_saves),
        schools: Object.values(state.entities.schools),
    }
};

const mDTP = dispatch => ({
    requestProf: (profId) => dispatch(requestProf(profId)),
    requestProfReviews: (profId, userId) => dispatch(requestProfReviews(profId, userId)),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId)),
    createProfSave: (profSave) => dispatch(createProfSave(profSave)),
    deleteProfSave: profSaveId => dispatch(deleteProfSave(profSaveId)),
});

export default connect(mSTP, mDTP)(ProfReviewIndex);