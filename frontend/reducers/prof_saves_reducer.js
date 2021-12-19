import { RECEIVE_PROF_SAVE } from "../actions/prof_save_actions";
import { merge } from 'lodash';

const ProfSavesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_PROF_SAVE:
            newState[action.profSave.id] = action.profSave;
            return newState;
        default:
            return oldState;
    }
}

export default ProfSavesReducer