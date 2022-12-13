import React, {useState} from 'react';
import './List.css'
import Filter from "./filter/Filter";
import Sort from "./sort/Sort";
import FilmCard from "./film_card/FilmCard";
import pulpFiction from '../../../images/temp_films/Pulp Fiction.jpg'
import bohemianRhapsody from '../../../images/temp_films/Bohemian Rhapsody.png'
import killBill from '../../../images/temp_films/Kill Bill.jpg'
import avengersWarOfInfinity from '../../../images/temp_films/Avengers War of infinity.jpg'
import inception from '../../../images/temp_films/Inception.jpg'
import reservoirDogs from '../../../images/temp_films/Reservoir dogs.jpg'


const List = () => {
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
            rating: "4.9"
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
            rating: "4.9"
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
            rating: "4.9"
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
            rating: "4.9"
        },
    ])

    function moviesFound(films) {
        if (films.length === 0) {
            return (
                <div className='film-card__no-movie-found'>
                    <h3>No Movie Found</h3>
                </div>
            )
        } else {
            return (
                <div>
                    <h3 className='film-card__movies-found'>{films.length} movies found</h3>
                    <div className="film-card__films-container">
                        {films.map(film => <FilmCard film={film}/>)}
                    </div>
                </div>
            )
        }
    }

    return (
        <div className='film-card__list'>
            <div className="film-card__navigation">
                <Filter/>
                <Sort/>
            </div>
            {moviesFound(films)}
        </div>
    );
};

export default List;
