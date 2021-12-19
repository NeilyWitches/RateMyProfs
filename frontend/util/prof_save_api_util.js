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
);

export const fetchSavedProfs = userId => (
    $.ajax({
        url: `/api/users/`,
        data: {userId}
    })
)

export const fetchProfSaves = userId => (
    $.ajax({
        url: `/api/prof_saves/`,
        data: {userId}
    })
)