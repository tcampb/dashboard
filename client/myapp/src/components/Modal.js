import React from 'react';
import TargetForm from './TargetForm.js';

const closeModal = () => {
    document.querySelector('body').setAttribute('style', 'position: ');
    document.querySelector('[data-modal-container]').classList.add('hide');
}

const saveForm = () => {

}

const Modal = () => {
    return (
        <div className="modal-overlay hide" data-modal-container>
            <div className="modal-container">
                <div className="modal-header"><h2>New Target</h2></div>
                <div className="modal-body">
                <TargetForm />
                </div>
                <div className="modal-footer">
                <button onClick={closeModal}>Cancel</button>
                <button>Save & New</button>
                <button onClick={saveForm}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;