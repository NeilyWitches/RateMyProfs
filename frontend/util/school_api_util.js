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