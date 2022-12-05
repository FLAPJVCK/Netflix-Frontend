import React, {useState} from 'react';
import dotsImage from '../../../../../images/three-dots-vertical.svg'
import './DotsMenu.css'

const DotsMenu = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className='three-dots-dropdown'>
            <button className='three-dots-dropdown__button' onClick={handleOpen}><img className='three-dots-dropdown__image' src={dotsImage} alt='Dots'/></button>
            {open ? (
                <ul className='three-dots-dropdown__menu'>
                    <li><button>Edit</button></li>
                    <li><button>Delete</button></li>
                </ul>
            ) : null}
        </div>
    );
};

export default DotsMenu;
