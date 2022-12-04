import React from 'react';
import './Filter.css'

const Filter = () => {
    return (
        <>
            <ul className='filters'>
                <li><button>ALL</button></li>
                <li><button>DOCUMENTARY</button></li>
                <li><button>COMEDY</button></li>
                <li><button>HORROR</button></li>
                <li><button>CRIME</button></li>
            </ul>
        </>
    );
};

export default Filter;