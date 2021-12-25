import { RECEIVE_SCHOOL_RATINGS } from "../actions/school_rating_actions";
import {merge} from 'lodash';

const SchoolRatingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_SCHOOL_RATINGS:
            newState = action.payload.school_ratings
            return newState;
        default:
            return oldState;
    }
}

export default SchoolRatingsReducer;