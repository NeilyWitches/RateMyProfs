export const fetchProfReview = profReviewId => (
    $.ajax({
        url: `/api/prof_reviews/${profReviewId}`
    })
);

export const fetchProfReviews = (profId, userId) => (
    $.ajax({
        url: `/api/prof_reviews/`,
        data: { profId, userId }
    })
)

export const createProfReview = profReview => (
    $.ajax({
        url: `/api/prof_reviews`,
        method: `POST`,
        data: { profReview }
    })
);

export const updateProfReview = profReview => (
    $.ajax({
        url: `/api/prof_reviews/${profReview.id}`,
        method: 'PATCH',
        data: { profReview }
    })
);

export const deleteProfReview = profReviewId => {  
    return $.ajax({
        url: `/api/prof_reviews/${profReviewId}`,
        method: `DELETE`,
    })
}