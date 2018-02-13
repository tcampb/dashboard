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
    
    return (
    <form>
    <h3 className="form-legend">Information</h3>
        <div className="col-left">
            <div className="ui-input"><span className="required"></span><span>Target Name</span>
            <div className="clearfix"></div>
            <input type="text" name="targetName" required /></div>
            <div className="ui-input"><span></span><span>Industry</span>
            <div className="clearfix"></div>
            <input type="text" name="industry"  /></div>
            <div className="ui-input"><span></span><span>Annual Revenue</span>
            <div className="clearfix"></div>
            <input type="number" name="annualRevenue"  /></div>
        </div>
        <div className="col-right">
            <div className="ui-input"><span></span><span>Employees</span>
            <div className="clearfix"></div>
            <input type="number" name="employees" /></div>
            <div className="ui-input"><span></span><span>Location</span>
            <div className="clearfix"></div>
            <input type="text" name="location" /></div>
            <div className="ui-input"><span></span><span>Deal Lead</span>
            <div className="clearfix"></div>
            <input type="text" name="dealLead" /></div>
        </div>
        <div className="clearfix"></div>
    <h3 className="form-legend">
    Related Contacts
    <button className="add-contact" onClick={addContact}>Add Contact</button>
    </h3>
    <div className="col-left">
    <div className="ui-input"><span className="required"></span><span>Contact Name</span>
    <div className="clearfix"></div>
    <input type="text" name="contactName" required /></div>
    <div className="ui-input"><span>Title</span>
    <div className="clearfix"></div>
    <input type="text" name="title" required /></div>
    </div>
    <div className="col-right">
    <div className="ui-input"><span>Email</span>
    <div className="clearfix"></div>
    <input type="email" name="email" required /></div>
    <div className="ui-input"><span>Phone</span>
    <div className="clearfix"></div>
    <input type="phone" name="phone" required /></div>
    </div>
    </form>)
}

export default TargetForm;