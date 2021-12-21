import { RECEIVE_SCHOOL } from '../actions/school_actions';
import {merge} from 'lodash';

const SchoolsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_SCHOOL:
            newState = action.payload.schools
            return newState;
        default:
            return oldState;
    }
}

export default SchoolsReducer;