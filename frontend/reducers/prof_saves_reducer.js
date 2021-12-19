import { RECEIVE_PROF_SAVE, RECEIVE_PROF_SAVES, REMOVE_PROF_SAVE } from "../actions/prof_save_actions";
import { RECEIVE_PROF_REVIEWS } from "../actions/prof_review_actions";
import { merge } from 'lodash';

const ProfSavesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_PROF_SAVE:
            newState[action.profSave.id] = action.profSave;
            return newState;
        case RECEIVE_PROF_REVIEWS:
            newState = action.payload.prof_saves
            return newState
        case REMOVE_PROF_SAVE:
            delete newState[action.profSaveId]
            return newState;
        case RECEIVE_PROF_SAVES:
            newState = action.payload.prof_saves
            return newState
        default:
            return oldState;
    }
}

export default ProfSavesReducer