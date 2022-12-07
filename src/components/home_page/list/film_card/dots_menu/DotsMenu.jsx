import React, {useState} from 'react';
import dotsImage from '../../../../../images/three-dots-vertical.svg'
import crossImage from '../../../../../images/x.svg'
import './DotsMenu.css'
import DeleteMovieModal from "../../../../modal/delete_movie/DeleteMovieModal";
import EditMovieModal from "../../../../modal/edit_movie/EditMovieModal";

const DotsMenu = () => {
    const [open, setOpen] = useState(false)

    const [activeModalEdit, setActiveModalEdit] = useState(false)
    const [activeModalDelete, setActiveModalDelete] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className='film-card__dropdown'>

            {open ? (
                <div className="film-card__button-container_cross">
                    <button className='film-card__dropdown_button_cross' onClick={handleOpen}>
                        <img className='film-card__dropdown_image_cross' src={crossImage} alt='Cross'/>
                    </button>
                </div>
            ) : (
                <div className="film-card__button-container_dots">
                    <button className='film-card__dropdown_button_dots' onClick={handleOpen}>
                        <img className='film-card__dropdown_image_dots' src={dotsImage} alt='Dots'/>
                    </button>
                </div>
            )}

            {open ? (
                <ul className='film-card__dropdown_menu'>
                    <li>
                        <button onClick={() => setActiveModalEdit(true)}>Edit</button>
                    </li>
                    <li>
                        <button onClick={() => setActiveModalDelete(true)}>Delete</button>
                    </li>
                </ul>
            ) : null}
            <EditMovieModal active={activeModalEdit} setActive={setActiveModalEdit}/>
            <DeleteMovieModal active={activeModalDelete} setActive={setActiveModalDelete}/>
        </div>
    );
};

export default DotsMenu;
