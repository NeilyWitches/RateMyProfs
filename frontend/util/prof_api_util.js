export const fetchProfs = (onlyProfs, schoolName, profQuery) => (
    $.ajax({
        url: `/api/profs`,
        data: {onlyProfs, schoolName, profQuery}
    })
);

export const fetchProf = profId => {
    return $.ajax({
        url: `/api/profs/${profId}`
    })
}; 

export const createProf = prof => (
    $.ajax({
        url: `/api/profs`,
        method: `POST`,
        data: { prof }
    })
);

export const updateProf = prof => (
    $.ajax({
        url: `/api/profs/${prof.id}`,
        method: 'PATCH',
        data: { prof }
    })
);