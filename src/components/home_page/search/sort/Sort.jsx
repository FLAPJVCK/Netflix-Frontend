import React, {useState} from 'react';
import './Sort.css'

const Sort = () => {
    return (
        <div className='sort-by'>
            <h3>SORT BY</h3>
            <select>
                <option>RELEASE DATE</option>
                <option>NAME</option>
            </select>
        </div>
    );
};

export default Sort;
