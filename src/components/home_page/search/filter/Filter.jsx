import React from 'react';
import './Filter.css'

const Filter = () => {
    return (
        <>
            <ul className='filters'>
                <li>ALL</li>
                <li>DOCUMENTARY</li>
                <li>COMEDY</li>
                <li>HORROR</li>
                <li>CRIME</li>
            </ul>
        </>
    );
};

export default Filter;