import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like,
});

const removeLike = (likeId, reviewId, profId) => ({
    type: REMOVE_LIKE,
    likeId,
    reviewId,
    profId
})

export const createLike = like => dispatch => (
    LikeApiUtil.createLike(like)
    .then(createdLike => {
        return dispatch(receiveLike(createdLike))
    })
)

export const deleteLike = (likeId) => dispatch => {
    return LikeApiUtil.deleteLike(likeId)
    .then(() => {
        return dispatch(removeLike(likeId))
    })
}