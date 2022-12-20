import React, {useState} from 'react';
import './Filter.css'
import {GENRES, MOVIE_URL} from "../../../../consts";
import {addMovieAction, removeAllMoviesAction} from "../../../../store/MoviesReduser";
import {useDispatch} from "react-redux";
import axios from "axios";

const Filter = () => {
    const dispatch = useDispatch();
    const [activeId, setActiveId] = useState(1);
    const values = ['ALL', ...GENRES]
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

    function sortFilms(sortParameterIndex) {
        dispatch(removeAllMoviesAction())
        axios.get(MOVIE_URL, sortParameterIndex !== 0 ? {params: {filter: values[sortParameterIndex]}} : null).then(data => {
            data.data.data.map(movie => addFilm(movie))
        })
    }

    return (
        <>
            <ul className='film-card__filter'>
                {values.map((value, index) => {
                    const id = index + 1
                    return (
                        <li className={activeId === id ? 'film-card__filter_active' : null}>
                            <button onClick={() => {
                                setActiveId(id);
                                sortFilms(index)
                            }}>{value}</button>
                        </li>)
                })}
            </ul>
        </>
    );
};

export default Filter;
