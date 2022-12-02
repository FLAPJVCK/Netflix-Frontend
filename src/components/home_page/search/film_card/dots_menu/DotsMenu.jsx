import React, {useState} from 'react';
import dotsImage from '../../../../../images/three-dots-vertical.svg'
import './DotsMenu.css'

const DotsMenu = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className='dropdown'>
            <button className='dots-button' onClick={handleOpen}><img className='dots-image' src={dotsImage} alt='Dots'/></button>
            {open ? (
                <ul className='menu'>
                    <li className="menu-item"><button>Edit</button></li>
                    <li className="menu-item"><button>Delete</button></li>
                </ul>
            ) : null}
        </div>
    );
};

export default DotsMenu;
