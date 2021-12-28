export const createSchoolRatingLike = schoolRatingLike => (
    $.ajax({
        url: `/api/school_rating_likes`,
        method: `POST`,
        data: {schoolRatingLike},
    })
);

export const deleteSchoolRatingLike = schoolRatingLikeId => {
    return $.ajax({
        url: `/api/school_rating_likes/${schoolRatingLikeId}`,
        method: "DELETE",
    })
}