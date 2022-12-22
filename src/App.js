import './App.css'
import HomePage from "./components/home_page/HomePage";
import ErrorBoundary from "./components/layouts/error_boundary/ErrorBoundary";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import {MOVIE_URL} from "./consts";
import {addMovieAction, removeAllMoviesAction} from "./store/MoviesReduser";
import {Route, Routes} from "react-router-dom";
import PageNotFound from "./components/errors/PageNotFound";

function App() {
    const dispatch = useDispatch();
    const addFilm = (movie) => {
        const currentMovie = {
            id: movie.id,
            title: movie.title,
            tagline: movie.tagline,
            vote_average: movie.vote_average,
            vote_count: movie.vote_count,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            overview: movie.overview,
            budget: movie.budget,
            revenue: movie.revenue,
            genres: movie.genres,
            runtime: movie.runtime
        }
        dispatch(addMovieAction(currentMovie))
    }

    useEffect(() => {
        dispatch(removeAllMoviesAction())
        axios.get(MOVIE_URL).then(data => {
            data.data.data.map(movie => addFilm(movie))
        })
    }, [addFilm, dispatch])

    return (
        <div className="App">
            <ErrorBoundary>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/film/:filmId'} element={<HomePage/>}/>
                    <Route path={'*'} element={<PageNotFound/>}/>
                </Routes>
            </ErrorBoundary>
        </div>
    );
}

export default App;
