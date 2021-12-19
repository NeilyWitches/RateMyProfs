export const createProfSave = profSave => (
    $.ajax({
        url: `/api/prof_saves`,
        method: `POST`,
        data: { profSave }
    })
);