import React, { Component } from 'react';
import ProgressBarWrapper from './ProgressBarWrapper.js';
import RecordColumn from './RecordColumn.js';

class Container extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="container">
        <ProgressBarWrapper />
        <div className="status-columns">
        <RecordColumn />
        </div>
        </div>
      );
    }
  }

export default Container;