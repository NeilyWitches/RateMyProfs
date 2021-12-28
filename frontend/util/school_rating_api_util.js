export const fetchSchoolRatings = schoolId => (
    $.ajax({
        url: `/api/school_ratings`,
        data: {schoolId}
    })
);

export const createSchoolRating = schoolRating => (
    $.ajax({
        url: "/api/school_ratings",
        data: {schoolRating},
        method: "POST",
    })
)