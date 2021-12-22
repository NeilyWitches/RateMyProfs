export const createSchool = school => (
    $.ajax({
        url: `/api/schools`,
        method: `POST`,
        data: {school},
    })
);

export const fetchSchools = () => (
    $.ajax({
        url: `/api/schools`,
    })
)

export const fetchSchool = (schoolId) => (
    $.ajax({
        url: `/api/schools/${schoolId}`,
        data: {schoolId}
    })
)