import * as SchoolRatingApiUtil from '../util/school_rating_api_util';

export const RECEIVE_SCHOOL_RATINGS = 'RECEIVE_SCHOOL_RATINGS';
export const RECEIVE_SCHOOL_RATING = 'RECEIVE_SCHOOL_RATING';

const receiveSchoolRatings = payload => ({
    type: RECEIVE_SCHOOL_RATINGS,
    payload,
})

const receiveSchoolRating = schoolRating => ({
    type: RECEIVE_SCHOOL_RATING,
    schoolRating,
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
}