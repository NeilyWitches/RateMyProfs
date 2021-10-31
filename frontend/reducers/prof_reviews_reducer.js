import {
    RECEIVE_PROF_REVIEWS,
    RECEIVE_PROF_REVIEW,
    REMOVE_PROF_REVIEW
} from '../actions/prof_review_actions';

const ProfReviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_PROF_REVIEWS:
            newState = action.profReviews;
            return newState;
        case RECEIVE_PROF_REVIEW:
            newState[action.profReview.id] = action.profReview;
            return newState;
        case REMOVE_PROF_REVIEW:
            delete newState[action.profReviewId];
            return newState;
        default:
            return oldState;
    }
}

export default ProfReviewsReducer;