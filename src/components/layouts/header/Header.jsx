import React, {useState} from 'react';
import Logo from '../logo/Logo';
import './Header.css'
import AddMovieModal from "../../modal/add_movie/AddMovieModal";

const Header = ({showButton}) => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <header className='header'>
            <Logo/>
            {showButton && <button className='header__button' onClick={() => setModalActive(true)}>+ ADD MOVIE</button>}
            <AddMovieModal active={modalActive} setActive={setModalActive}/>
        </header>
    );
};

export default Header;
