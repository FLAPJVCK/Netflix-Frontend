import React, {useState} from 'react';
import ModalWindow from "../../ModalWindow";
import './AddMovieModal.css'
import MultipleDropdown from "../../../layouts/miltiple_dropdown/MultipleDropdown";
import CustomDatePicker from "../../../layouts/date_picker/CustomDatePicker";
import {GENRES} from "../../../../consts";

const AddMovieModal = ({active, setActive}) => {
    const [genre, setGenre] = useState(GENRES)

    return (
        <>
            <ModalWindow active={active} setActive={setActive} secondaryText={'RESET'} submitText={'SUBMIT'}>
                <div className="add-movie-modal">
                    <h2>ADD MOVIE</h2>
                    <h3>TITLE</h3>
                    <input type='text' placeholder='Film title'/>
                    <h3>RELEASE DATE</h3>
                    <CustomDatePicker/>
                    <h3>MOVIE URL</h3>
                    <input type='text' placeholder='Movie URL here'/>
                    <h3>GENRE</h3>
                    <MultipleDropdown values={genre}/>
                    <h3>OVERVIEW</h3>
                    <input type='text' placeholder='Overview here'/>
                    <h3>RUNTIME</h3>
                    <input type='text' placeholder='Runtime here'/>
                </div>
            </ModalWindow>
        </>
    );
};

export default AddMovieModal;