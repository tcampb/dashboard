import React, { Component } from 'react';

const closeModal = () => {
    document.querySelector('body').setAttribute('style', 'position: ');
    document.querySelector('[data-modal-container]').classList.add('hide');
}

const Modal = () => {
    const targetForm =
                        <form>
                        <h3 className="form-legend">Information</h3>
                        <div className="col-left">
                        <div className="ui-input"><span className="required"></span><span>Target Name</span>
                        <div className="clearfix"></div>
                        <input type="text" required /></div>
                        <div className="ui-input"><span></span><span>Industry</span>
                        <div className="clearfix"></div>
                        <input type="text"  /></div>
                        <div className="ui-input"><span></span><span>Annual Revenue</span>
                        <div className="clearfix"></div>
                        <input type="number"  /></div>
                        </div>
                        <div className="col-right">
                        <div className="ui-input"><span></span><span>Employees</span>
                        <div className="clearfix"></div>
                        <input type="number"  /></div>
                        <div className="ui-input"><span></span><span>Location</span>
                        <div className="clearfix"></div>
                        <input type="number"  /></div>
                        <div className="ui-input"><span></span><span>Deal Lead</span>
                        <div className="clearfix"></div>
                        <input type="text"  /></div>
                        </div>
                        <div className="clearfix"></div>
                        <h3 className="form-legend">Related Contacts</h3>

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