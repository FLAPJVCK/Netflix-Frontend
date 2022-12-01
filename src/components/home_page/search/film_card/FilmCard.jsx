import React from 'react';
import PropTypes from "prop-types";
import imageNotFound from '../../../../images/404.png';
import './FilmCadr.css'

const FilmCard = ({imageSrc, alt, name, year, genre}) => {
    return (
        <div className='film-card'>
            <img className='image' src={imageSrc} alt={alt}/>
            <div className="name-year">
                <h4 className='name'>{name}</h4>
                <h4 className='year'>{year}</h4>
            </div>
            <h4 className='genre'>{genre}</h4>
        </div>
    );
};

FilmCard.propTypes = {
    imageSrc: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string
};

FilmCard.defaultProps = {
    imageSrc: imageNotFound,
    alt: 'Film poster',
    name: 'Not found',
    year: 404,
    genre: 'Not found'
}

export default FilmCard;
