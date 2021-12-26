import * as ProfApiUtil from '../util/prof_api_util';

export const RECEIVE_PROFS = 'RECEIVE_PROFS';
export const RECEIVE_PROF = 'RECEIVE_PROF';
export const RECEIVE_PROF_ERRORS = 'RECEIVE_PROF_ERRORS';
export const RECEIVE_ALL_PROFS = 'RECEIVE_ALL_PROFS';

const receiveProfs = payload => ({
    type: RECEIVE_PROFS,
    payload,
});

const receiveAllProfs = payload => ({
    type: RECEIVE_ALL_PROFS,
    payload,
})

const receiveProf = payload => {
    return {
        type: RECEIVE_PROF,
        payload,
    }
};

export const receiveProfErrors = errors => ({
    type: RECEIVE_PROF_ERRORS,
    errors,
})

export const requestProfs = (schoolName, profQuery) => dispatch => (
    ProfApiUtil.fetchProfs(false, schoolName, profQuery)
    .then(payload => dispatch(receiveProfs(payload)))
);

export const requestAllProfs = onlyProfs => dispatch => (
    ProfApiUtil.fetchProfs(onlyProfs)
    .then(payload => dispatch(receiveAllProfs(payload)))
);

export const requestProf = profId => dispatch => {
    return ProfApiUtil.fetchProf(profId)
    .then(payload => dispatch(receiveProf(payload)))
};

export const newProf = prof => dispatch => (
    ProfApiUtil.createProf(prof)
        .then(prof => {
            return dispatch(receiveProf(prof))
        })
        .fail(err => {
            return dispatch(receiveProfErrors(err.responseJSON))
        })
)

export const editProf = prof => dispatch => (
    ProfApiUtil.updateProf(prof)
        .then(prof => {
            return dispatch(receiveProf(prof))
        })
        .fail(err => {
            return dispatch(receiveProfErrors(err.responseJSON))
        })
)