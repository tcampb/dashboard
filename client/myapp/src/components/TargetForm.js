import React from 'react';

const addContact = () => {
    const contactElement = (<React.Fragment>
        <div className="col-left">
        <div className="ui-input"><span className="required"></span><span>Contact Name</span>
        <div className="clearfix"></div>
        <input type="text" required /></div>
        <div className="ui-input"><span>Title</span>
        <div className="clearfix"></div>
        <input type="text" required /></div>
        </div>
        <div className="col-right">
        <div className="ui-input"><span>Email</span>
        <div className="clearfix"></div>
        <input type="email" required /></div>
        <div className="ui-input"><span>Phone</span>
        <div className="clearfix"></div>
        <input type="phone" required /></div>
        </div>
        </React.Fragment>)

    document.querySelector('form').append(contactElement);
}

const TargetForm = () => {
    
    return (<form>
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
    <input type="text"  /></div>
    <div className="ui-input"><span></span><span>Deal Lead</span>
    <div className="clearfix"></div>
    <input type="text"  /></div>
    </div>
    <div className="clearfix"></div>
    <h3 className="form-legend">
    Related Contacts
    <button className="add-contact" onClick={addContact}>Add Contact</button>
    </h3>
    <div className="col-left">
    <div className="ui-input"><span className="required"></span><span>Contact Name</span>
    <div className="clearfix"></div>
    <input type="text" required /></div>
    <div className="ui-input"><span>Title</span>
    <div className="clearfix"></div>
    <input type="text" required /></div>
    </div>
    <div className="col-right">
    <div className="ui-input"><span>Email</span>
    <div className="clearfix"></div>
    <input type="email" required /></div>
    <div className="ui-input"><span>Phone</span>
    <div className="clearfix"></div>
    <input type="phone" required /></div>
    </div>
    </form>)
}

export default TargetForm;