import React, {useState} from 'react';
import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import Search from "./search/Search";
import List from "./list/List";
import FilmInformation from "./film_information/FilmInformation";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const [currentFilm, setCurrentFilm] = useState(null)
    const navigate = useNavigate()

    const handleFilmChange = (currentFilm) => {
        setCurrentFilm(currentFilm)
    }

    const disableActiveFilm = () => {
        setCurrentFilm(null)
        navigate('/')
    }

    return (
        <div>
            <Header showButton={!currentFilm}/>
            {currentFilm ? <FilmInformation film={currentFilm} disableActiveFilm={disableActiveFilm}/> : <Search/>}
            <List setCurrentFilm={handleFilmChange}/>
            <Footer/>
        </div>
    );
};

export default HomePage;
