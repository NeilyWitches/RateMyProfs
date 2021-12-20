import {connect} from 'react-redux';
import { createProfSave, deleteProfSave, requestSavedProfs, requestProfSaves  } from '../../actions/prof_save_actions';
import SavedProfs from './saved_profs';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.current_user,
        profs: Object.values(state.entities.profs),
        profReviews: Object.values(state.entities.prof_reviews),
        profSaves: Object.values(state.entities.prof_saves),
    }
};

const mDTP = dispatch => ({
    requestSavedProfs: (userId) => dispatch(requestSavedProfs(userId)),
    createProfSave: (profSave) => dispatch(createProfSave(profSave)),
    deleteProfSave: (profSaveId) => dispatch(deleteProfSave(profSaveId)),
    requestProfSaves: (userId) => dispatch(requestProfSaves(userId))
})

export default connect(mSTP, mDTP)(SavedProfs)