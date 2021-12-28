import * as SchoolRatingLikeApiUtil from '../util/school_rating_like_api_util';

export const RECEIVE_SCHOOL_RATING_LIKE = 'RECEIVE_SCHOOL_RATING_LIKE';
export const REMOVE_SCHOOL_RATING_LIKE = 'REMOVE_SCHOOL_RATING_LIKE';

const receiveSchoolRatingLike = schoolRatingLike => ({
    type: RECEIVE_SCHOOL_RATING_LIKE,
    schoolRatingLike,
});

const removeSchoolRatingLike = (schoolRatingLikeId) => ({
    type: REMOVE_SCHOOL_RATING_LIKE,
    schoolRatingLikeId,
})

export const createSchoolRatingLike = schoolRatingLike => dispatch => (
    SchoolRatingLikeApiUtil.createSchoolRatingLike(schoolRatingLike)
    .then(createdSchoolRatingLike => {
        return dispatch(receiveSchoolRatingLike(createdSchoolRatingLike))
    })
)

export const deleteSchoolRatingLike = schoolRatingLikeId => dispatch => {
    return SchoolRatingLikeApiUtil.deleteSchoolRatingLike(schoolRatingLikeId)
    .then(() => {
        return dispatch(removeSchoolRatingLike(schoolRatingLikeId))
    })
}