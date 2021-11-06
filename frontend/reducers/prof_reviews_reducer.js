import { RECEIVE_PROF } from '../actions/prof_actions';
import { REMOVE_PROF_REVIEW } from '../actions/prof_review_actions';

const ProfReviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_PROF:
            newState = action.payload.prof_reviews;
            return newState;
        case REMOVE_PROF_REVIEW:
            delete newState[action.profReviewId];
            return newState;
        default:
            return oldState;
    }
}

export default ProfReviewsReducer;