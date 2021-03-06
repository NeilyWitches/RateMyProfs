export const createUser = user => (
    $.ajax({
        url: `/api/users`,
        method: 'POST',
        data: { user }
    })
);

export const updateUser = user => (
    $.ajax({
        url: `/api/users/${user.id}`,
        method: 'PATCH',
        data: { user } 
    })
)

export const deleteUser = user => (
    $.ajax({
        url: `/api/users/${user.id}`,
        method: 'DELETE',
        data: { user }
    })
)

export const createSession = user => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
);

export const deleteSession = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
);