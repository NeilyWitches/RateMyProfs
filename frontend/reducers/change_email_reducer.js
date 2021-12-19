import { CLEAR_ERRORS } from "../actions/clear_errors";
import { RECEIVE_EMAIL_CHANGE_ERRORS } from "../actions/session_actions";

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EMAIL_CHANGE_ERRORS:
            return action.errors
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}