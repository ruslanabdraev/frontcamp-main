export const movies = (state = [], action) => {
    switch (action.type) {
        case "SET_MOVIES" :{
            return [...action.items]
        }
        default:
            return state
    }
}


export const sort = (state = "release_date", action) => {
    switch (action.type) {
        case "SORT_MOVIES":
            return action.sortBy
        default :
            return state
    }
}