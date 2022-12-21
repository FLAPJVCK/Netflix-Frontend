import React, {useState} from 'react';
import ModalWindow from "../../ModalWindow";
import './AddMovieModal.css'
import MultipleDropdown from "../../../layouts/miltiple_dropdown/MultipleDropdown";
import CustomDatePicker from "../../../layouts/date_picker/CustomDatePicker";
import {GENRES} from "../../../../consts";

const AddMovieModal = ({active, setActive}) => {
        const [genre, setGenre] = useState(GENRES)
        const [movie, setMovie] = useState({
            title:'',
            releaseDate:'2000',
            posterPath:'',
            genres:["first", 'second'],
            overview:'',
            runtime: 0
        })

        function handleChange(event) {
            const newMovie = {...movie}
            newMovie[event.target.id] = event.target.value
            setMovie(newMovie)
            console.log(newMovie)
        }

        return (
            <>
                <ModalWindow active={active} setActive={setActive} secondaryText={'RESET'} submitText={'SUBMIT'} movie={movie}>
                    <form className="add-movie-modal">
                        <h2>ADD MOVIE</h2>
                        <h3>TITLE</h3>
                        <input type='text'
                               placeholder='Film title'
                               id='title'
                               value={movie.title}
                               onChange={(event) => handleChange(event)}
                               required
                        />
                        <h3>RELEASE DATE</h3>
                        <CustomDatePicker/>
                        <h3>MOVIE URL</h3>
                        <input type='text'
                               placeholder='Movie URL here'
                               id='posterPath'
                               value={movie.posterPath}
                               onChange={(event) => handleChange(event)}
                               required
                        />
                        <h3>GENRE</h3>
                        <MultipleDropdown values={genre}/>
                        <h3>OVERVIEW</h3>
                        <input type='text'
                               placeholder='Overview here'
                               id='overview'
                               value={movie.overview}
                               onChange={(event) => handleChange(event)}
                               required
                        />
                        <h3>RUNTIME</h3>
                        <input type='number'
                               placeholder='Runtime here'
                               id='runtime'
                               value={movie.runtime}
                               onChange={(event) => handleChange(event)}
                               required
                        />
                    </form>
                </ModalWindow>
            </>
        );
    };

export default AddMovieModal;
