import React, { Component } from 'react';

class ProgressBarWrapper extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="progressbar-wrapper">
            <div className="status pipeline">
              Pipeline
            </div>
            <div className="status researching">
              Researching
            </div>
            <div className="status pending">
              Pending Approval
            </div>
            <div className="status approved">
              Approved
            </div>
        </div>
      );
    }
  }

  export default ProgressBarWrapper;