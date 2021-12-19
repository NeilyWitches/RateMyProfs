import * as ProfSaveApiUtil from '../util/prof_save_api_util';

export const RECEIVE_PROF_SAVE = 'RECEIVE_PROF_SAVE';
export const REMOVE_PROF_SAVE = 'REMOVE_PROF_SAVE';

const receiveProfSave = profSave => ({
    type: RECEIVE_PROF_SAVE,
    profSave,
})

const removeProfSave = profSaveId => ({
    type: REMOVE_PROF_SAVE,
    profSaveId,
})

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