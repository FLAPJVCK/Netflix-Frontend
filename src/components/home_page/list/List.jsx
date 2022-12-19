import React, {useState} from 'react';
import './List.css'
import Filter from "./filter/Filter";
import Sort from "./sort/Sort";
import FilmCard from "./film_card/FilmCard";

const List = ({films, setCurrentFilm}) => {

    function moviesFound(films) {
        if (films.length === 0) {
            return (
                <div className='film-card__no-movie-found'>
                    <h3>No Movie Found</h3>
                </div>
            )
        } else {
            return (
                <div>
                    <h3 className='film-card__movies-found'>{films.length} movies found</h3>
                    <div className="film-card__films-container">
                        {films.map(film => <FilmCard film={film} setCurrentFilm={setCurrentFilm}/>)}
                    </div>
                </div>
            )
        }
    }

    return (
        <div className='film-card__list'>
            <div className="film-card__navigation">
                <Filter/>
                <Sort/>
            </div>
            {moviesFound(films)}
        </div>
    );
};

export default List;
