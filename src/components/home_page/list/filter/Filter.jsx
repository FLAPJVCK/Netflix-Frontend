import React from 'react';
import './Filter.css'

const Filter = () => {
    return (
        <>
            <ul className='filters'>
                <li><button type='button'>ALL</button></li>
                <li><button type='button'>DOCUMENTARY</button></li>
                <li><button type='button'>COMEDY</button></li>
                <li><button type='button'>HORROR</button></li>
                <li><button type='button'>CRIME</button></li>
            </ul>
        </>
    );
};

export default Filter;