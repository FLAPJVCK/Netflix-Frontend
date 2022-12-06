import React from 'react';
import './Search.css'

const Search = () => {
    return (
        <div className='film-search'>
            <h2 className="film-search__title">FIND YOUR MOVIE</h2>
            <form action='' className='film-search__form'>
                <input type='text' className='film-search__input' placeholder='What do you want to watch?'/>
                <button type='submit' className='film-search__button'>SEARCH</button>
            </form>
        </div>
    );
};

export default Search;