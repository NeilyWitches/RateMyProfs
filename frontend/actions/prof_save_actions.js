import * as ProfSaveApiUtil from '../util/prof_save_api_util';

export const RECEIVE_PROF_SAVE = 'RECEIVE_PROF_SAVE';
export const REMOVE_PROF_SAVE = 'REMOVE_PROF_SAVE';
export const RECEIVE_SAVED_PROFS = 'RECEIVE_SAVED_PROFS'

const receiveProfSave = profSave => ({
    type: RECEIVE_PROF_SAVE,
    profSave,
})

const removeProfSave = profSaveId => ({
    type: REMOVE_PROF_SAVE,
    profSaveId,
})

const receiveSavedProfs = payload => ({
    type: RECEIVE_SAVED_PROFS,
    payload,
})

export const requestSavedProfs = userId => dispatch => (
    ProfSaveApiUtil.fetchSavedProfs(userId)
    .then(payload => {
        return dispatch(receiveSavedProfs(payload))
    })
)

export const createProfSave = profSave => dispatch => (
    ProfSaveApiUtil.createProfSave(profSave)
    .then(profSave => {
        return dispatch(receiveProfSave(profSave))
    })
)

export const deleteProfSave = profSaveId => dispatch => (
    ProfSaveApiUtil.deleteProfSave(profSaveId)
    .then(() => {
        return dispatch(removeProfSave(profSaveId))
    })
)