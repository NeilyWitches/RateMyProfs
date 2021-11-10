import {
    RECEIVE_PROFS,
    RECEIVE_PROF,
    CREATE_PROF,
} from '../actions/prof_actions';

const ProfsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_PROFS:
            return Object.assign({}, action.profs, oldState);
        case RECEIVE_PROF:
            newState[action.payload.id] = action.payload;
            return newState;
        case CREATE_PROF:
            newState[action.payload.id] = action.payload;
            return newState;
        default:
            return oldState;
    }
}

export default ProfsReducer;