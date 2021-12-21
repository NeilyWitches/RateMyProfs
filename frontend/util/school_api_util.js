export const createSchool = school => (
    $.ajax({
        url: `/api/schools`,
        method: `POST`,
        data: {school},
    })
);