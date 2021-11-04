import * as ProfApiUtil from '../util/prof_api_util';

export const RECEIVE_PROFS = 'RECEIVE_PROFS';
export const RECEIVE_PROF = 'RECEIVE_PROF';

const receiveProfs = profs => ({
    type: RECEIVE_PROFS,
    profs,
});

const receiveProf = prof => {
    return {
    type: RECEIVE_PROF,
    prof,
}};

export const requestProfs = () => dispatch => (
    ProfApiUtil.fetchProfs()
    .then(profs => dispatch(receiveProfs(profs)))
);

export const requestProf = profId => dispatch => {
    return ProfApiUtil.fetchProf(profId)
        .then(prof => dispatch(receiveProf(prof)))
};

export const createProf = prof => dispatch => {
    return ProfApiUtil.createProf(prof)
        .then(createdProf => {
            return dispatch(receiveProf(createdProf))
        })
};

export const updateProf = prof => dispatch => (
    ProfApiUtil.updateProf(prof)
        .then(updatedProf => dispatch(receiveProf(updatedProf)))
);
