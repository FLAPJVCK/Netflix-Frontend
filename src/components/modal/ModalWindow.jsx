import React from 'react';
import './ModalWindow.css'
import crossImage from '../../images/x.svg'
import axios from "axios";
import {MOVIE_URL} from "../../consts";

const ModalWindow = ({active, setActive, children, secondaryText, submitText, movie}) => {

    function submit(e){
        e.preventDefault()
        console.log(movie)
        axios.post(MOVIE_URL, {
            title: movie.title,
            release_date: movie.releaseDate,
            poster_path: movie.posterPath,
            genres: movie.genres,
            overview: movie.overview,
            runtime: parseInt(movie.runtime)
        })
        //     .then(res=>{
        //     console.log(res.data)
        // })
    }

    return (
        <div className={active ? 'modal-window active' : 'modal-window'} onClick={() => setActive(false)}>
            <form className={active ? 'modal-window_content active' : 'modal-window_content'}
                 onClick={e => e.stopPropagation()} onSubmit={event => submit(event)}>
                <button className='modal-window__exit-button' onClick={() => setActive(false)}>
                    <img className='modal-window__exit-image' src={crossImage} alt='Cross'/>
                </button>
                {children}
                {(secondaryText || submitText) &&
                    <div className="modal-window__buttons">
                        {secondaryText && <button className='modal-window__buttons_secondary-text' type='reset'>{secondaryText}</button>}
                        {submitText && <button className='modal-window__buttons_submit-text' type='submit'>{submitText}</button>}
                    </div>
                }
            </form>
        </div>
    );
};

export default ModalWindow;
