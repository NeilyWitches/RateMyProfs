import { RECEIVE_SCHOOL_RATINGS, RECEIVE_SCHOOL_RATING } from "../actions/school_rating_actions";
import {RECEIVE_SCHOOLS_AND_RATINGS} from '../actions/school_actions';
import {merge} from 'lodash';

const SchoolRatingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_SCHOOL_RATINGS:
            newState = action.payload.school_ratings
            return newState;
        case RECEIVE_SCHOOLS_AND_RATINGS:
            newState = action.payload.school_ratings
            return newState;
        case RECEIVE_SCHOOL_RATING:
            newState[action.schoolRating.id] = action.schoolRating;
            return newState;
        default:
            return oldState;
    }
}

export default SchoolRatingsReducer;