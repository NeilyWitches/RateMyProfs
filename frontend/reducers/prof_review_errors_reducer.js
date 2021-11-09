import {
    RECEIVE_PROF_REVIEW_ERRORS,
} from '../actions/prof_review_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROF_REVIEW_ERRORS:
            return action.errors
    }
};