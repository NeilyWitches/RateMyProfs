import {
    RECEIVE_USER
} from '../actions/user_actions';

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_USER:
            newState[action.payload.id] = action.payload;
            return newState
        default:
            return oldState;
    }
};

export default UsersReducer;