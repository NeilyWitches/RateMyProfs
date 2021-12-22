import * as SchoolApiUtil from '../util/school_api_util';

export const RECEIVE_SCHOOL = 'RECEIVE_SCHOOL';
export const RECEIVE_SCHOOL_ERRORS = 'RECEIVE_SCHOOL_ERRORS';
export const RECEIVE_SCHOOLS = 'RECEIVE_SCHOOLS';

const receiveSchool = payload => {
    return {
        type: RECEIVE_SCHOOL,
        payload,
    }
}

const receiveSchools = payload => ({
    type: RECEIVE_SCHOOLS,
    payload,
});

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

export const requestSchools = () => dispatch => (
    SchoolApiUtil.fetchSchools()
    .then(payload => dispatch(receiveSchools(payload)))
);

export const requestSchool = schoolId => dispatch => (
    SchoolApiUtil.fetchSchool(schoolId)
    .then(payload => dispatch(receiveSchool(payload)))
);