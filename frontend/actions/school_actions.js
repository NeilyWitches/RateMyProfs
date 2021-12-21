import * as SchoolApiUtil from '../util/school_api_util';

export const RECEIVE_SCHOOL = 'RECEIVE_SCHOOL';
export const RECEIVE_SCHOOL_ERRORS = 'RECEIVE_SCHOOL_ERRORS';

const receiveSchool = payload => {
    return {
        type: RECEIVE_SCHOOL,
        payload,
    }
}

export const receiveSchoolErrors = errors => ({
    type: RECEIVE_SCHOOL_ERRORS,
    errors,
})

export const newSchool = school => dispatch => (
    SchoolApiUtil.createSchool(school)
    .then(school => {
        return dispatch(receiveSchool(school))
    })
    .fail(err => {
        return dispatch(receiveSchoolErrors(err.responseJSON))
    })
)