import React from 'react';
import './Sort.css'

const Sort = () => {
    return (
        <div className='film-card__sort'>
            <h3>SORT BY</h3>
            <select className='film-card__select'>
                <option>RELEASE DATE</option>
                <option>NAME</option>
            </select>
        </div>
    );
};

export default Sort;
