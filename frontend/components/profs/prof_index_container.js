import { connect } from 'react-redux';
import ProfIndex from './prof_index';
import { requestProfs } from '../../actions/prof_actions';
import { createProfSave, deleteProfSave, requestProfSaves } from '../../actions/prof_save_actions';

const mSTP = state => {
    return {
        profs: Object.values(state.entities.profs),
        profReviews: Object.values(state.entities.prof_reviews),
        profSaves: Object.values(state.entities.prof_saves),
        currentUser: state.session.current_user,
    }
};

const mDTP = dispatch => ({
    requestProfs: () => dispatch(requestProfs()),
    requestProfSaves: (userId) => dispatch(requestProfSaves(userId)),
    createProfSave: profSave => dispatch(createProfSave(profSave)),
    deleteProfSave: profSaveId => dispatch(deleteProfSave(profSaveId)),
});

export default connect(mSTP, mDTP)(ProfIndex);