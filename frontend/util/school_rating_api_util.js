export const fetchSchoolRatings = schoolId => (
    $.ajax({
        url: `/api/school_ratings`,
        data: {schoolId}
    })
)