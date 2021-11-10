import {
    RECEIVE_PROF_ERRORS,
} from '../actions/prof_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROF_ERRORS:
            return action.errors
        default:
            return state;
    }
};