import React, {useState} from 'react';
import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import Search from "./search/Search";
import List from "./list/List";
import pulpFiction from "../../images/temp_films/Pulp Fiction.jpg";
import bohemianRhapsody from "../../images/temp_films/Bohemian Rhapsody.png";
import killBill from "../../images/temp_films/Kill Bill.jpg";
import avengersWarOfInfinity from "../../images/temp_films/Avengers War of infinity.jpg";
import inception from "../../images/temp_films/Inception.jpg";
import reservoirDogs from "../../images/temp_films/Reservoir dogs.jpg";
import FilmInformation from "./film_information/FilmInformation";

const HomePage = () => {
    const [activeFilm, setActiveFilm] = useState(false)
    const [currentFilm, setCurrentFilm] = useState()

    const handleFilmChange = (currentFilm) => {
        setCurrentFilm(currentFilm)
        setActiveFilm(true)
    }

    const disableActiveFilm = () => {
        setActiveFilm(false)
    }

    const [films, setFilms] = useState([
        {
            imageSrc: pulpFiction,
            alt: 'Pulp Fiction',
            movieId: 'AAF234',
            title: 'Pulp Fiction',
            year: '1994',
            movieURL: 'www.pulpfiction.com',
            genre: 'Action & Adventure',
            overview: 'Good Film',
            runtime: '130',
            rating: "4.9"
        },
        {
            imageSrc: bohemianRhapsody,
            alt: 'Bohemian Rhapsody',
            title: 'Bohemian Rhapsody',
            year: '2003',
            movieURL: 'www.bohemianrhapsody.com',
            genre: 'Drama, Biography, Music',
            overview: 'Good Film',
            runtime: '130',
            rating: "5.0"
        },
        {
            imageSrc: killBill,
            alt: 'Kill Bill: Vol 2',
            title: 'Kill Bill: Vol 2',
            year: '2004',
            movieURL: 'www.killbill.com',
            genre: 'Oscar winning Movie',
            overview: 'Good Film',
            runtime: '130',
            rating: "4.5"
        },
        {
            imageSrc: avengersWarOfInfinity,
            alt: 'Avengers: War of infinity',
            title: 'Avengers: War of infinity',
            year: '2018',
            movieURL: 'www.avengerswarofinfinity.com',
            genre: 'Action & Adventure',
            overview: 'Good Film',
            runtime: '130',
            rating: "5.0"
        },
        {
            imageSrc: inception,
            alt: 'Inception',
            title: 'Inception',
            year: '2010',
            movieURL: 'www.inception.com',
            genre: 'Action & Adventure',
            overview: 'Good Film',
            runtime: '130',
            rating: "4.9"
        },
        {
            imageSrc: reservoirDogs,
            alt: 'Reservoir dogs',
            title: 'Reservoir dogs',
            year: '1992',
            movieURL: 'www.reservoirdogs.com',
            genre: 'Oscar winning Movie',
            overview: 'Good Film',
            runtime: '130',
            rating: "4.7"
        },
    ])

    return (
        <div>
            <Header showButton={!activeFilm}/>
            {activeFilm ? <FilmInformation film={currentFilm} disavleActiveFilm={disableActiveFilm}/> : <Search/>}
            <List films={films} setCurrentFilm={handleFilmChange}/>
            <Footer/>
        </div>
    );
};

export default HomePage;
