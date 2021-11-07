import * as ProfReviewApiUtil from '../util/prof_review_api_util';

export const RECEIVE_PROF_REVIEW = 'RECEIVE_PROF_REVIEW';
export const REMOVE_PROF_REVIEW = 'REMOVE_PROF_REVIEW';

const receiveProfReview = profReview => ({
    type: RECEIVE_PROF_REVIEW,
    profReview,
});

const removeProfReview = profReviewId => ({
    type: REMOVE_PROF_REVIEW,
    profReviewId,
})

export const requestProfReview = profReviewId => dispatch => {
    return ProfReviewApiUtil.fetchProfReview(profReviewId)
    .then(profReview => {
        return dispatch(receiveProfReview(profReview))
    })
}

export const createProfReview = profReview => dispatch => {
    return ProfReviewApiUtil.createProfReview(profReview)
    .then(createdProfReview => {
        return dispatch(receiveProfReview(createdProfReview))})
};

export const updateProfReview = profReview => dispatch => (
    ProfReviewApiUtil.updateProfReview(profReview)
    .then(updatedProfReview => dispatch(receiveProfReview(updatedProfReview)))
);

export const deleteProfReview = profReviewId => dispatch => (
    ProfReviewApiUtil.deleteProfReview(profReviewId)
    .then(() => dispatch(removeProfReview(profReviewId)))
);