import { RECEIVE_PROFS } from '../actions/prof_actions';
import { RECEIVE_PROF_REVIEW, REMOVE_PROF_REVIEW, RECEIVE_PROF_REVIEWS } from '../actions/prof_review_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash'
import { RECEIVE_SAVED_PROFS } from '../actions/prof_save_actions';

const ProfReviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_PROFS:
            newState = action.payload.prof_reviews
            return newState;
        case RECEIVE_PROF_REVIEW:
            newState[action.profReview.id] = action.profReview;
            return newState;
        case REMOVE_PROF_REVIEW:
            delete newState[action.profReviewId]
            return newState;
        case RECEIVE_PROF_REVIEWS:
            newState = action.payload.prof_reviews
            return newState
        case RECEIVE_USER:
            newState = action.payload.prof_reviews
            return newState
        case RECEIVE_SAVED_PROFS:
            newState = action.payload.prof_reviews
            return newState;
        default:
            return oldState;
    }
}

export default ProfReviewsReducer;