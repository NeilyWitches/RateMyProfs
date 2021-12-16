import { RECEIVE_PROFS, RECEIVE_PROF, CREATE_PROF, } from '../actions/prof_actions';
import { merge } from 'lodash';

const ProfsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_PROFS:
            newState = action.payload.profs
            return newState;
        case RECEIVE_PROF:
            newState = action.payload.profs;
            return newState;
        // case CREATE_PROF:
        //     newState[action.payload.id] = action.payload;
        //     return newState;
        default:
            return oldState;
    }
}

export default ProfsReducer;