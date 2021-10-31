import * as ProfReviewApiUtil from '../util/prof_review_api_util';

export const RECEIVE_PROF_REVIEWS = 'RECEIVE_PROF_REVIEWS';
export const RECEIVE_PROF_REVIEW = 'RECEIVE_PROF_REVIEW';
export const REMOVE_PROF_REVIEW = 'REMOVE_PROF_REVIEW';

const receiveProfReviews = profReviews => ({
    type: RECEIVE_PROF_REVIEWS,
    profReviews,
});

const receiveProfReview = profReview => ({
    type: RECEIVE_PROF_REVIEW,
    profReview,
});

const removeProfReview = profReviewId => ({
    type: REMOVE_PROF_REVIEW,
    profReviewId,
});

export const requestProfReviews = () => dispatch => (
    ProfReviewApiUtil.fetchProfReviews()
    .then(profReviews => dispatch(receiveProfReviews(profReviews)))
);

export const requestProfReview = profReviewId => dispatch => (
    ProfReviewApiUtil.fetchProfReview(profReviewId)
    .then(profReview => dispatch(receiveProfReview(profReview)))
);

export const createProfReview = profReview => dispatch => (
    ProfReviewApiUtil.createProfReview(profReview)
    .then(createdProfReview => dispatch(receiveProfReview(createdProfReview)))
);

export const updateProfReview = profReview => dispatch => (
    ProfReviewApiUtil.updateProfReview(profReview)
    .then(updatedProfReview => dispatch(receiveProfReview(updatedProfReview)))
);

export const deleteProfReview = profReviewId => dispatch => (
    ProfReviewApiUtil.deleteProfReview(profReviewId)
    .then(deletedProfReview => dispatch(removeProfReview(deletedProfReview.id)))
);