import React, {useState} from 'react';
import ModalWindow from "../../ModalWindow";
import './AddMovieModal.css'
import MultipleDropdown from "../../../layouts/miltiple_dropdown/MultipleDropdown";
import CustomDatePicker from "../../../layouts/date_picker/CustomDatePicker";
import {GENRES, MOVIE_URL} from "../../../../consts";
import {useFormik} from "formik";
import * as Yup from 'yup';
import axios from "axios";

const AddMovieModal = ({active, setActive}) => {
    const [genre, setGenre] = useState(GENRES)

    const formik = useFormik({
        initialValues: {
            title: '',
            release_date: '2000',
            poster_path: '',
            genres: ["first", 'second'],
            overview: '',
            runtime: 0
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Required'),
            poster_path: Yup.string().required('Required'),
            overview: Yup.string().required('Required'),
            runtime: Yup.number().required('Required')
        }),
        onSubmit: values => axios.post(MOVIE_URL, values)
    })

    return (
        <>
            <ModalWindow active={active} setActive={setActive} secondaryText={'RESET'} submitText={'SUBMIT'}
                         formik={formik}>
                <form className="add-movie-modal">
                    <h2>ADD MOVIE</h2>
                    <h3>TITLE</h3>
                    <input type='text'
                           placeholder='Film title'
                           id='title'
                           name='title'
                           value={formik.values.title}
                           onBlur={formik.handleBlur}
                           onChange={formik.handleChange}
                           required
                    />
                    {formik.touched.title && formik.errors.title && <div>{formik.errors.title}</div>}
                    <h3>RELEASE DATE</h3>
                    <CustomDatePicker/>
                    <h3>MOVIE URL</h3>
                    <input type='text'
                           placeholder='Movie URL here'
                           id='poster_path'
                           name='poster_path'
                           value={formik.values.poster_path}
                           onBlur={formik.handleBlur}
                           onChange={formik.handleChange}
                           required
                    />
                    {formik.touched.poster_path && formik.errors.poster_path && <div>{formik.errors.poster_path}</div>}
                    <h3>GENRE</h3>
                    <MultipleDropdown values={genre}/>
                    <h3>OVERVIEW</h3>
                    <input type='text'
                           placeholder='Overview here'
                           id='overview'
                           name='overview'
                           value={formik.values.overview}
                           onBlur={formik.handleBlur}
                           onChange={formik.handleChange}
                           required
                    />
                    {formik.touched.overview && formik.errors.overview && <div>{formik.errors.overview}</div>}
                    <h3>RUNTIME</h3>
                    <input type='number'
                           placeholder='Runtime here'
                           id='runtime'
                           name='runtime'
                           value={formik.values.runtime}
                           onBlur={formik.handleBlur}
                           onChange={formik.handleChange}
                           required
                    />
                    {formik.touched.runtime && formik.errors.runtime && <div>{formik.errors.runtime}</div>}
                </form>
            </ModalWindow>
        </>
    );
};

export default AddMovieModal;
