import React from 'react';
import './FilmInformation.css'
import searchIcon from '../../../images/search-image.svg'

const FilmInformation = ({film, disableActiveFilm}) => {
    const {poster_path, alt, title, release_date, genres, runtime, vote_average} = film

    return (
        <div className='film-information'>
            <img className='film-information__search-icon' src={searchIcon} alt='Search icon' onClick={disableActiveFilm}/>
            <img className='film-information__film-poster' src={poster_path} alt={alt}/>
            <div className="film-information__description">
                <div className="film-information__description_title-rating">
                    <h2 className='film-information__description_title-rating_title'>{title}</h2>
                    <h2 className='film-information__description_title-rating_rating'>{vote_average}</h2>
                </div>
                <h4>{genres.map(genre=>{return genre + '; '})}</h4>
                <div className="film-information__description_year-runtime">
                    <h3 className='film-information__description_year-runtime_year'>{release_date}</h3>
                    <h3 className='film-information__description_year-runtime_runtime'>{runtime} min</h3>
                </div>
            </div>
        </div>
    );
};

export default FilmInformation;
