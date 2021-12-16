import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_USER:
            newState = action.payload.user;
            return newState
        default:
            return oldState;
    }
};

export default UsersReducer;