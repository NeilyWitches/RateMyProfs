import * as ProfSaveApiUtil from '../util/prof_save_api_util';

export const RECEIVE_PROF_SAVE = 'RECEIVE_PROF_SAVE';

const receiveProfSave = profSave => ({
    type: RECEIVE_PROF_SAVE,
    profSave,
})

export const createProfSave = profSave => dispatch => (
    ProfSaveApiUtil.createProfSave(profSave)
    .then(profSave => {
        return dispatch(receiveProfSave(profSave))
    })
)