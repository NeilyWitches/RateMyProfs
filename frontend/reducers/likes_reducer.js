import { RECEIVE_PROF } from '../actions/prof_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { merge } from 'lodash';

const LikesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_PROF:
            newState = action.payload.likes;
            return newState;
        // case RECEIVE_LIKE:
        //     newState[action.like.id] = action.like;
        //     return newState;
        // case REMOVE_LIKE:
        //     delete newState.likes[action.likeId];
        //     return newState;
        default:
            return oldState;
    }
}

export default LikesReducer