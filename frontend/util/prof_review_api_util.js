export const fetchProfReviews = () => (
    $.ajax({
        url: `/api/prof_reviews`
    })
);

export const fetchProfReview = profReviewId => (
    $.ajax({
        url: `/api/prof_reviews/${profReviewId}`
    })
);

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

export const deleteProfReview = profReviewId => (
    $.ajax({
        url: `/api/prof_reviews/${profReviewId}`,
        method: `DELETE`,
    })
);