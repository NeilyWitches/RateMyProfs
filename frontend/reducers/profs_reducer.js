import { RECEIVE_PROFS, RECEIVE_PROF, RECEIVE_ALL_PROFS } from '../actions/prof_actions';
import { merge } from 'lodash';
import { RECEIVE_SAVED_PROFS } from '../actions/prof_save_actions';
import {RECEIVE_USER} from '../actions/user_actions'
import {RECEIVE_SCHOOL_RATINGS} from '../actions/school_rating_actions';

const ProfsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_PROFS:
            newState = action.payload.profs
            return newState;
        case RECEIVE_PROF:
            newState = action.payload.profs
            return newState;
        case RECEIVE_SAVED_PROFS:
            newState = action.payload.profs
            return newState;
        case RECEIVE_USER:
            newState = action.payload.profs
            return newState;
        case RECEIVE_ALL_PROFS:
            newState = action.payload.profs
            return newState;
        case RECEIVE_SCHOOL_RATINGS:
            newState = action.payload.profs
            return newState;
        default:
            return oldState;
    }
}

export default ProfsReducer;