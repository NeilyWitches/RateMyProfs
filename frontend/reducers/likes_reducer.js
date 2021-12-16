import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { merge } from 'lodash';
import { RECEIVE_PROF_REVIEWS } from '../actions/prof_review_actions';

const LikesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_PROF_REVIEWS:
            newState = action.payload.likes;
            return newState;
        case RECEIVE_LIKE:
            newState[action.like.id] = action.like;
            return newState;
        case REMOVE_LIKE:
            delete newState[action.likeId];
            return newState;
        default:
            return oldState;
    }
}

export default LikesReducer