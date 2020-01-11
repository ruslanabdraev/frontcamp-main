import { createStore, combineReducers, applyMiddleware } from 'redux'
import { movies , sort } from './reducers'
const stateData = {
    movies: [],
    sort: "release_date"
}

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const saver = store => next => action => {
    let result = next(action)
    sessionStorage['redux-store-movies'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (initialState=stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({movies, sort}),
        (sessionStorage['redux-store-movies']) ?
             JSON.parse(sessionStorage['redux-store-movies']) :
            initialState
    )

export default storeFactory