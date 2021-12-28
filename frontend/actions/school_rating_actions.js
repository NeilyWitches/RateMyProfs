import * as SchoolRatingApiUtil from '../util/school_rating_api_util';

export const RECEIVE_SCHOOL_RATINGS = 'RECEIVE_SCHOOL_RATINGS';
export const RECEIVE_SCHOOL_RATING = 'RECEIVE_SCHOOL_RATING';
export const RECEIVE_SCHOOL_RATING_ERRORS = 'RECEIVE_SCHOOL_RATING_ERRORS';

const receiveSchoolRatings = payload => ({
    type: RECEIVE_SCHOOL_RATINGS,
    payload,
})

const receiveSchoolRating = schoolRating => ({
    type: RECEIVE_SCHOOL_RATING,
    schoolRating,
})

const receiveSchoolRatingErrors = errors => ({
    type: RECEIVE_SCHOOL_RATING_ERRORS,
    errors,
})

export const requestSchoolRatings = (schoolId) => dispatch => {
    return SchoolRatingApiUtil.fetchSchoolRatings(schoolId)
    .then(payload => {
        return dispatch(receiveSchoolRatings(payload))
    })
};

export const createSchoolRating = schoolRating => dispatch => {
    return SchoolRatingApiUtil.createSchoolRating(schoolRating)
    .then(createdSchoolRating => {
        return dispatch(receiveSchoolRating(createdSchoolRating))
    })
    .fail(err => {
        return dispatch(receiveSchoolRatingErrors(err.responseJSON))
    })
}