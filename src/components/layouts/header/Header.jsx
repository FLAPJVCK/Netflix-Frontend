import React from 'react';
import Logo from '../logo/Logo';
import './Header.css'

const Header = ({showButton}) => {
    return (
        <header className='header'>
            <Logo/>
            {showButton && <button className='add-movie-button'>+ ADD MOVIE</button>}
        </header>
    );
};

export default Header;
