export const setMovies = (data = []) =>
    ({
        type: "SET_MOVIES",
        items: data
    })

export const sortMovies = sortBy =>
    ({
        type: "SORT_MOVIES",
        sortBy
    })