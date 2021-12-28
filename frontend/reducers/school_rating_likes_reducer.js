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
            newState[action.schoolRatingLike.id] = action.schoolRatingLike;
            return newState;
        case REMOVE_SCHOOL_RATING_LIKE:
            delete newState[action.schoolRatingLikeId];
            return newState;
        default:
            return oldState;
    }
}

export default SchoolRatingLikesReducer;