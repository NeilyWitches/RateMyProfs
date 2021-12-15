import {
    RECEIVE_PROFS,
    RECEIVE_PROF,
    CREATE_PROF,
} from '../actions/prof_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions'
import { merge } from 'lodash';

const ProfsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_PROFS:
            return merge({}, action.profs, oldState);
        case RECEIVE_PROF:
            newState[action.payload.id] = action.payload;
            return newState;
        case CREATE_PROF:
            newState[action.payload.id] = action.payload;
            return newState;
        case RECEIVE_LIKE:
            newState[action.like.prof_id].prof_reviews[action.like.review_id].likes[action.like.id] = action.like
            return newState;
        case REMOVE_LIKE:
            console.log('inside REMOVE_LIKE')
            console.log('below is oldState') 
            console.log(oldState)
            console.log('below is newState')
            console.log(newState)
            console.log('below is action')
            console.log(action)
            return newState
        default:
            return oldState;
    }
}

export default ProfsReducer;