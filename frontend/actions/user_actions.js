import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = payload => {
    return {
        type: RECEIVE_USER,
        payload,
    }
};

export const requestUser = userId => dispatch => {
    return UserApiUtil.fetchUser(userId)
        .then(payload => dispatch(receiveUser(payload)))
};