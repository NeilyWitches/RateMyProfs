import * as SchoolRatingApiUtil from '../util/school_rating_api_util';

export const RECEIVE_SCHOOL_RATINGS = 'RECEIVE_SCHOOL_RATINGS';

const receiveSchoolRatings = payload => ({
    type: RECEIVE_SCHOOL_RATINGS,
    payload,
})

export const requestSchoolRatings = (schoolId) => dispatch => {
    return SchoolRatingApiUtil.fetchSchoolRatings(schoolId)
    .then(payload => {
        return dispatch(receiveSchoolRatings(payload))
    })
};