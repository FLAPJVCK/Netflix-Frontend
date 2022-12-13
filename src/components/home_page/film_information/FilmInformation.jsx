import React from 'react';
import './FilmInformation.css'
import searchIcon from '../../../images/search-image.svg'

const FilmInformation = ({film, activeFilm}) => {
    const {imageSrc, alt, title, year, genre, runtime, rating} = film

    return (
        <div className='film-information'>
            <img className='film-information__search-icon' src={searchIcon} alt='Search icon' onClick={activeFilm}/>
            <img className='film-information__film-poster' src={imageSrc} alt={alt}/>
            <div className="film-information__description">
                <div className="film-information__description_title-rating">
                    <h2 className='film-information__description_title-rating_title'>{title}</h2>
                    <h2 className='film-information__description_title-rating_rating'>{rating}</h2>
                </div>
                <h4>{genre}</h4>
                <div className="film-information__description_year-runtime">
                    <h3 className='film-information__description_year-runtime_year'>{year}</h3>
                    <h3 className='film-information__description_year-runtime_runtime'>{runtime} min</h3>
                </div>
            </div>
        </div>
    );
};

export default FilmInformation;