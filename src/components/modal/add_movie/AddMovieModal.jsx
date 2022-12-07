import React from 'react';
import ModalWindow from "../ModalWindow";
import './AddMovieModal.css'

const AddMovieModal = ({active, setActive}) => {
    return (
        <>
            <ModalWindow active={active} setActive={setActive}>
                <div className="add-movie-modal">
                    <h2>ADD MOVIE</h2>
                    <h3>TITLE</h3>
                    <input type='text' placeholder='Film title'/>
                    <h3>RELEASE DATE</h3>
                    <input type='text' placeholder='Select Date'/>
                    <h3>MOVIE URL</h3>
                    <input type='text' placeholder='Movie URL here'/>
                    <h3>GENRE</h3>
                    <h3>OVERVIEW</h3>
                    <input type='text' placeholder='Overview here'/>
                    <h3>RUNTIME</h3>
                    <input type='text' placeholder='Runtime here'/>
                    <div className="add-movie-modal_buttons">
                        <button className='add-movie-modal_buttons_reset'>RESET</button>
                        <button className='add-movie-modal_buttons_submit'>SUBMIT</button>
                    </div>
                </div>
            </ModalWindow>
        </>
    );
};

export default AddMovieModal;