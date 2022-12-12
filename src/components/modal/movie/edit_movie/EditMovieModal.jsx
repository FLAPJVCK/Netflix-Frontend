import React, {useState} from 'react';
import ModalWindow from "../../ModalWindow";
import './EditMovieModal.css'
import MultipleDropdown from "../../../layouts/miltiple_dropdown/MultipleDropdown";
import CustomDatePicker from "../../../layouts/date_picker/CustomDatePicker";
import {GENRES} from "../../../../consts";

const EditMovieModal = ({active, setActive}) => {
    const [genre, setGenre] = useState(GENRES)

    return (
        <>
          <ModalWindow active={active} setActive={setActive} secondaryText={'RESET'} submitText={'SAVE'}>
              <div className="edit-movie-modal">
                  <h2>EDIT MOVIE</h2>
                  <h3>MOVIE ID</h3>
                  <h4>movieId</h4>
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

export default EditMovieModal;