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
        {imageSrc: pulpFiction, alt: 'Pulp Fiction', name: 'Pulp Fiction', year: '1994', genre: 'Action & Adventure'},
        {
            imageSrc: bohemianRhapsody,
            alt: 'Bohemian Rhapsody',
            name: 'Bohemian Rhapsody',
            year: '2003',
            genre: 'Drama, Biography, Music'
        },
        {
            imageSrc: killBill,
            alt: 'Kill Bill: Vol 2',
            name: 'Kill Bill: Vol 2',
            year: '2004',
            genre: 'Oscar winning Movie'
        },
        {
            imageSrc: avengersWarOfInfinity,
            alt: 'Avengers: War of infinity',
            name: 'Avengers: War of infinity',
            year: '2018',
            genre: 'Action & Adventure'
        },
        {imageSrc: inception, alt: 'Inception', name: 'Inception', year: '2010', genre: 'Action & Adventure'},
        {
            imageSrc: reservoirDogs,
            alt: 'Reservoir dogs',
            name: 'Reservoir dogs',
            year: '1992',
            genre: 'Oscar winning Movie'
        },
        {imageSrc: pulpFiction, alt: 'Pulp Fiction', name: 'Pulp Fiction', year: '1994', genre: 'Action & Adventure'},
        {
            imageSrc: bohemianRhapsody,
            alt: 'Bohemian Rhapsody',
            name: 'Bohemian Rhapsody',
            year: '2003',
            genre: 'Drama, Biography, Music'
        },
        {
            imageSrc: killBill,
            alt: 'Kill Bill: Vol 2',
            name: 'Kill Bill: Vol 2',
            year: '2004',
            genre: 'Oscar winning Movie'
        },
        {
            imageSrc: avengersWarOfInfinity,
            alt: 'Avengers: War of infinity',
            name: 'Avengers: War of infinity',
            year: '2018',
            genre: 'Action & Adventure'
        },
        {imageSrc: inception, alt: 'Inception', name: 'Inception', year: '2010', genre: 'Action & Adventure'},
        {
            imageSrc: reservoirDogs,
            alt: 'Reservoir dogs',
            name: 'Reservoir dogs',
            year: '1992',
            genre: 'Oscar winning Movie'
        }
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
                        {films.map(film => <FilmCard {...film}/>)}
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
