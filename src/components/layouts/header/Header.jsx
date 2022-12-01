import React from 'react';
import Logo from '../logo/Logo';
import './Header.css'
import AddMovieButton from "../AddMovieButton/AddMovieButton";

const Header = ({showButton}) => {
    return (
        <header className='header'>
            <Logo/>
            {showButton && <AddMovieButton/>}
        </header>
    );
};

export default Header;