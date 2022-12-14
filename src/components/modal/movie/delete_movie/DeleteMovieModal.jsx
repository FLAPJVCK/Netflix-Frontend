import React from 'react';
import ModalWindow from "../../ModalWindow";
import './DeleteMovieModal.css'

const DeleteMovieModal = ({active, setActive}) => {
    return (
        <>
            <ModalWindow active={active} setActive={setActive} submitText={'CONFIRM'}>
                <div className="delete-movie-modal">
                    <h2>DELETE MOVIE</h2>
                    <h3>Are you sure you want to delete this movie?</h3>
                </div>
            </ModalWindow>
        </>
    );
};

export default DeleteMovieModal;