import { RECEIVE_SCHOOL, RECEIVE_SCHOOLS, RECEIVE_SCHOOLS_AND_RATINGS } from '../actions/school_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {merge} from 'lodash';
import { RECEIVE_SAVED_PROFS } from '../actions/prof_save_actions';
import {RECEIVE_PROFS} from '../actions/prof_actions';
import {RECEIVE_PROF_REVIEWS} from '../actions/prof_review_actions'

const SchoolsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_SCHOOL:
            newState = action.payload.schools
            return newState;
        case RECEIVE_SCHOOLS:
            newState = action.payload.schools
            return newState;
        case RECEIVE_USER:
            newState = action.payload.schools
            return newState;
        case RECEIVE_SAVED_PROFS:
            newState = action.payload.schools
            return newState;
        case RECEIVE_PROFS:
            newState = action.payload.schools
            return newState;
        case RECEIVE_PROF_REVIEWS:
            newState = action.payload.schools
            return newState;
        case RECEIVE_SCHOOLS_AND_RATINGS:
            newState = action.payload.schools
            return newState;
        default:
            return oldState;
    }
}

export default SchoolsReducer;