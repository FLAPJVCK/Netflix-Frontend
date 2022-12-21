const defaultMovies = {
    movies: []
}
const ADD_MOVIE = 'ADD_MOVIE'
const REMOVE_ALL_MOVIES = 'REMOVE_ALL_MOVIES'
export const moviesReducer = (state = defaultMovies, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {...state, movies: [...state.movies, action.payload]}
        case REMOVE_ALL_MOVIES:
            return defaultMovies
        default:
            return state
    }
}

export const addMovieAction = (payload) => ({type: ADD_MOVIE, payload})
export const removeAllMoviesAction = () => ({type: REMOVE_ALL_MOVIES})
