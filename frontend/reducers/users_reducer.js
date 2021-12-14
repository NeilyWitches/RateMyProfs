import { REMOVE_PROF_REVIEW } from '../actions/prof_review_actions';
import {
    RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_USER:
            newState[action.payload.id] = action.payload;
            return newState
        case REMOVE_PROF_REVIEW:
            let userId = Object.keys(oldState)[0]
            delete newState[userId].prof_reviews[action.profReviewId]
            return newState
        default:
            return oldState;
    }
};

export default UsersReducer;