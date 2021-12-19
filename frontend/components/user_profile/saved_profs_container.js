import {connect} from 'react-redux';
import { createProfSave, deleteProfSave, requestSavedProfs } from '../../actions/prof_save_actions';
import SavedProfs from './saved_profs';

const mSTP = (state, ownProps) => {
    return {
        user: state.session.current_user,
        profs: Object.values(state.entities.profs),
        profReviews: Object.values(state.entities.prof_reviews)
    }
};

const mDTP = dispatch => ({
    requestSavedProfs: (userId) => dispatch(requestSavedProfs(userId)),
    createProfSave: (profSave) => dispatch(createProfSave(profSave)),
    deleteProfSave: (profSaveId) => dispatch(deleteProfSave(profSaveId)),
})

export default connect(mSTP, mDTP)(SavedProfs)