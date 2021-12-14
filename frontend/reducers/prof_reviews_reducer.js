import { RECEIVE_PROF } from '../actions/prof_actions';
import { RECEIVE_PROF_REVIEW, REMOVE_PROF_REVIEW } from '../actions/prof_review_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const ProfReviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_PROF:
            newState = action.payload.profs.prof_reviews;
            return newState;
        case RECEIVE_USER:
            newState = action.payload.prof_reviews;
            return newState;
        case RECEIVE_PROF_REVIEW:
            newState[action.profReview.id] = action.profReview;
            return newState;
        case REMOVE_PROF_REVIEW:
            delete newState.prof_reviews[action.profReviewId];
            return newState;
        default:
            return oldState;
    }
}

export default ProfReviewsReducer;