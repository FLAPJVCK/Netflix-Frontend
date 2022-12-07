import React from 'react';
import './ModalWindow.css'
import crossImage from '../../images/x.svg'

const ModalWindow = ({active, setActive, children}) => {
    return (
        <div className={active ? 'modal-window active' : 'modal-window'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-window_content active': 'modal-window_content'} onClick={e => e.stopPropagation()}>
                <button className='modal-window__exit-button' onClick={() => setActive(false)}>
                    <img className='modal-window__exit-image' src={crossImage} alt='Cross'/>
                </button>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;