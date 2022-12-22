import React from 'react';
import './ModalWindow.css'
import crossImage from '../../images/x.svg'

const ModalWindow = ({active, setActive, children, secondaryText, submitText, formik}) => {

    return (
        <div className={active ? 'modal-window active' : 'modal-window'} onClick={() => setActive(false)}>
            <form className={active ? 'modal-window_content active' : 'modal-window_content'}
                  onClick={e => e.stopPropagation()} onSubmit={e => formik.handleSubmit(e)}>
                <button className='modal-window__exit-button' onClick={() => setActive(false)}>
                    <img className='modal-window__exit-image' src={crossImage} alt='Cross'/>
                </button>
                {children}
                {(secondaryText || submitText) &&
                    <div className="modal-window__buttons">
                        {secondaryText && <button className='modal-window__buttons_secondary-text' type='reset'
                                                  onClick={e => formik.resetForm()}>{secondaryText}</button>}
                        {submitText && <button className='modal-window__buttons_submit-text' type='submit'
                                               disabled={!formik.isValid}>{submitText}</button>}
                    </div>
                }
            </form>
        </div>
    );
};

export default ModalWindow;
