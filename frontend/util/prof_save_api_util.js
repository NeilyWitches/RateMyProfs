export const createProfSave = profSave => (
    $.ajax({
        url: `/api/prof_saves`,
        method: `POST`,
        data: { profSave }
    })
);

export const deleteProfSave = profSaveId => (
    $.ajax({
        url: `/api/prof_saves/${profSaveId}`,
        method: `DELETE`,
    })
)