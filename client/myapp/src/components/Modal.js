import React, { Component } from 'react';

const closeModal = () => {
    document.querySelector('body').setAttribute('style', 'position: ');
    document.querySelector('[data-modal-container]').classList.add('hide');
}

const Modal = () => {
    const targetForm = <form>
                        <div className="ui-input"><span className="required">Target Name</span><input type="text" /></div>
                        </form>
                         

    return (
        <div className="modal-overlay hide" data-modal-container>
            <div className="modal-container">
                <div className="modal-header"><h2>New Target</h2></div>
                <div className="modal-body">
                {targetForm}
                </div>
                <div className="modal-footer">
                <button onClick={closeModal}>Cancel</button>
                <button>Save & New</button>
                <button>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;