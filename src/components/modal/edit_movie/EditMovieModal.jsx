import React from 'react';
import ModalWindow from "../ModalWindow";
import './EditMovieModal.css'

const EditMovieModal = ({active, setActive}) => {
    return (
        <>
          <ModalWindow active={active} setActive={setActive}>
              <div className="edit-movie-modal">
                  <h2>ADD MOVIE</h2>
                  <h3>MOVIE ID</h3>
                  <h4>movieId</h4>
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
                  <div className="edit-movie-modal_buttons">
                      <button className='edit-movie-modal_buttons_reset'>RESET</button>
                      <button className='edit-movie-modal_buttons_save'>SAVE</button>
                  </div>
              </div>
          </ModalWindow>
        </>
    );
};

export default EditMovieModal;