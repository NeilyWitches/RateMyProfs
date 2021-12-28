import {merge} from 'lodash';
import {RECEIVE_SCHOOL_RATINGS} from '../actions/school_rating_actions';
import { RECEIVE_SCHOOL_RATING_LIKE, REMOVE_SCHOOL_RATING_LIKE } from '../actions/school_rating_like_actions';

const SchoolRatingLikesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_SCHOOL_RATINGS:
            newState = action.payload.school_rating_likes;
            return newState;
        case RECEIVE_SCHOOL_RATING_LIKE:
            // debugger
            newState[action.schoolRatingLike.id] = action.schoolRatingLike;
            // debugger
            return newState;
        case REMOVE_SCHOOL_RATING_LIKE:
            // debugger
            // console.log(newState)
            delete newState[action.schoolRatingLikeId];
            // debugger
            // console.log(newState)
            return newState;
        default:
            return oldState;
    }
}

export default SchoolRatingLikesReducer;