import {combineReducers, createStore} from "redux";
import {moviesReducer} from "./MoviesReduser";

const rootReducer = combineReducers({
    movies: moviesReducer
})

export const store = createStore(rootReducer)
