import React, {useState} from 'react';
import PropTypes from "prop-types";
import imageNotFound from '../../../../images/404.png';
import './FilmCadr.css'
import DotsMenu from "./dots_menu/DotsMenu";

const FilmCard = ({film}) => {
    const {imageSrc, alt, title, year, genre} = film

    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver = () => {
        setIsHovering(true)
    }

    const handleMouseOut = () => {
        setIsHovering(false)
    }

    return (
        <div className='film-card'>
            <div className='film-card__poster' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {isHovering && (<DotsMenu/>)}
                <img className='film-card__image' src={imageSrc || imageNotFound} alt={alt || 'Film poster'}/>
            </div>

            <div className="film-card__name-year">
                <h4 className='film-card__name'>{title || 'Not found'}</h4>
                <h4 className='film-card__year'>{year || 'Not found'}</h4>
            </div>
            <h4 className='film-card__genre'>{genre || 'Not found'}</h4>
        </div>
    );
};

FilmCard.propTypes = {
    film: PropTypes.shape({
        imageSrc: PropTypes.string,
        alt: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.number,
        genre: PropTypes.string
    })
};

export default FilmCard;
