export const createSchool = school => (
    $.ajax({
        url: `/api/schools`,
        method: `POST`,
        data: {school},
    })
);

export const fetchSchools = (schoolQuery) => (
    $.ajax({
        url: `/api/schools`,
        data: {schoolQuery}
    })
)

export const fetchSchool = (schoolId) => (
    $.ajax({
        url: `/api/schools/${schoolId}`,
        data: {schoolId}
    })
)