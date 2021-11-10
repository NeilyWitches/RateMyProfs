import {
    RECEIVE_SIGNUP_ERRORS,
} from '../actions/session_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SIGNUP_ERRORS:
            return action.errors
        default:
            return state;
    }
};