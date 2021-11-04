import {
    RECEIVE_PROFS,
    RECEIVE_PROF,
} from '../actions/prof_actions';

const ProfsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_PROFS:
            newState = action.profs;
            return newState;
        case RECEIVE_PROF:
            newState[action.prof.id] = action.prof;
            return newState;
        default:
            return oldState;
    }
}

export default ProfsReducer;