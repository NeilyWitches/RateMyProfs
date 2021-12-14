import * as ProfReviewApiUtil from '../util/prof_review_api_util';

export const RECEIVE_PROF_REVIEW = 'RECEIVE_PROF_REVIEW';
export const REMOVE_PROF_REVIEW = 'REMOVE_PROF_REVIEW';
export const RECEIVE_PROF_REVIEW_ERRORS = 'RECEIVE_PROF_REVIEW_ERRORS';

const receiveProfReview = profReview => ({
    type: RECEIVE_PROF_REVIEW,
    profReview,
});

const removeProfReview = profReviewId => ({
    type: REMOVE_PROF_REVIEW,
    profReviewId,
})

export const receiveProfReviewErrors = errors => ({
    type: RECEIVE_PROF_REVIEW_ERRORS,
    errors
})

export const requestProfReview = profReviewId => dispatch => {
    return ProfReviewApiUtil.fetchProfReview(profReviewId)
    .then(profReview => {
        return dispatch(receiveProfReview(profReview))
    })
}

export const createProfReview = profReview => dispatch => (
    ProfReviewApiUtil.createProfReview(profReview)
    .then(createdProfReview => {
        return dispatch(receiveProfReview(createdProfReview))
    })
    .fail(err => {
        return dispatch(receiveProfReviewErrors(err.responseJSON))
    })
)

export const updateProfReview = profReview => dispatch => (
    ProfReviewApiUtil.updateProfReview(profReview)
    .then(updatedProfReview => {
        return dispatch(receiveProfReview(updatedProfReview))
    })
    .fail(err => {
        return dispatch(receiveProfReviewErrors(err.responseJSON))
    })
)

export const deleteProfReview = profReviewId => dispatch => {
    return ProfReviewApiUtil.deleteProfReview(profReviewId)
    .then(() => {   
        return dispatch(removeProfReview(profReviewId))
    })
};