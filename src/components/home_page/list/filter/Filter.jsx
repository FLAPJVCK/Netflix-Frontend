import React, {useState} from 'react';
import './Filter.css'
import {GENRES} from "../../../../consts";

const Filter = () => {
    const [activeId, setActiveId] = useState(1);
    const values = ['ALL', ...GENRES]

    return (
        <>
            <ul className='film-card__filter'>
                {values.map((value, index) => {
                    const id = index + 1
                    return (
                        <li className={activeId === id ? 'film-card__filter_active' : null}>
                            <button onClick={() => setActiveId(id)}>{value}</button>
                        </li>)
                })}
            </ul>
        </>
    );
};

export default Filter;
