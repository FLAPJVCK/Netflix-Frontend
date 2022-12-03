import React, {useState} from 'react';
import PropTypes from "prop-types";
import imageNotFound from '../../../../images/404.png';
import './FilmCadr.css'
import DotsMenu from "./dots_menu/DotsMenu";

const FilmCard = ({imageSrc, alt, name, year, genre}) => {
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver = () => {
        setIsHovering(true)
    }

    const handleMouseOut = () => {
        setIsHovering(false)
    }

    return (
        <div className='film-card'>
            <div className='poster' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {isHovering && (<DotsMenu/>)}
                <img className='image' src={imageSrc} alt={alt}/>
            </div>

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
