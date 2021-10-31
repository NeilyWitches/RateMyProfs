export const fetchProfReviews = () => (
    $.ajax({
        url: `/api/profReviews`
    })
);

export const fetchProfReview = profReviewId => (
    $.ajax({
        url: `/api/profReviews/${profReviewId}`
    })
);

export const createProfReview = profReview => (
    $.ajax({
        url: `/api/profReviews`,
        method: `POST`,
        data: { profReview }
    })
);

export const updateProfReview = profReview => (
    $.ajax({
        url: `/api/profReviews/${profReview.id}`,
        method: 'PATCH',
        data: { profReport }
    })
);

export const deleteProfReview = profReviewId => (
    $ajax({
        url: `/api/profReviews/${profReviewId}`,
        method: `DELETE`,
    })
);