import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_LOGIN_ERRORS = 'RECEIVE_LOGIN_ERRORS';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';
export const RECEIVE_EMAIL_CHANGE_ERRORS = 'RECEIVE_EMAIL_CHANGE_ERRORS';
export const RECEIVE_PASSWORD_CHANGE_ERRORS = 'RECEIVE_PASSWORD_CHANGE_ERRORS';
export const RECEIVE_UPDATE_PROFILE_ERRORS = 'RECEIVE_UPDATE_PROFILE_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveLoginErrors = errors => ({
    type: RECEIVE_LOGIN_ERRORS,
    errors
})

export const receiveSignUpErrors = errors => ({
    type: RECEIVE_SIGNUP_ERRORS,
    errors,
})

export const receiveEmailChangeErrors = errors => ({
    type: RECEIVE_EMAIL_CHANGE_ERRORS,
    errors,
})

export const receivePasswordChangeErrors = errors => ({
    type: RECEIVE_PASSWORD_CHANGE_ERRORS,
    errors,
})

export const receiveUpdateProfileErrors = errors => ({
    type: RECEIVE_UPDATE_PROFILE_ERRORS,
    errors,
})

export const createUser = formUser => dispatch => (
    SessionApiUtil.createUser(formUser)
    .then(user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveSignUpErrors(err.responseJSON))
    ))
);

export const editEmail = formUser => dispatch => (
    SessionApiUtil.updateUser(formUser)
    .then(user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveEmailChangeErrors(err.responseJSON))
    ))
)

export const editPassword = formUser => dispatch => (
    SessionApiUtil.updateUser(formUser)
    .then(user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receivePasswordChangeErrors(err.responseJSON))
    ))
)

export const updateProfile = formUser => dispatch => (
    SessionApiUtil.updateUser(formUser)
    .then(user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveUpdateProfileErrors(err.responseJSON))
    ))
)

export const deleteUser = user => dispatch => (
    SessionApiUtil.deleteUser(user)
    .then(() => {
        return dispatch(logoutCurrentUser())
    },
    err => (dispatch(receiveSignUpErrors(err.responseJSON))
    ))
);

export const login = formUser => dispatch => (
    SessionApiUtil.createSession(formUser).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveLoginErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
    SessionApiUtil.deleteSession().then(() => (
        dispatch(logoutCurrentUser())
    ))
);