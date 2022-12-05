import React, {useState} from 'react';
import './Filter.css'

const Filter = () => {
    const [activeId, setActiveId] = useState(1);

    const values = [
        {id: 1, text: 'ALL'},
        {id: 2, text: 'DOCUMENTARY'},
        {id: 3, text: 'COMEDY'},
        {id: 4, text: 'HORROR'},
        {id: 5, text: 'CRIME'},
    ]

    return (
        <>
            <ul className='filters'>
                {values.map(value => (
                    <li className={activeId === value.id ? 'active' : null}>
                        <button onClick={() => setActiveId(value.id)}
                                >{value.text}</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Filter;