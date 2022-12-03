import React from 'react';
import './Search.css'

const Search = () => {
    return (
        <div className='search'>
            <h2 className="find-your-movie">FIND YOUR MOVIE</h2>
            <form action='' className='search-form'>
                <input type='text' className='input-search' placeholder='What do you want to watch?'/>
                <button type='submit' className='button-search'>SEARCH</button>
            </form>
        </div>
    );
};

export default Search;