import React, { Component } from 'react';
import Record from './Record.js';

class RecordColumn extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <React.Fragment>
        <div className="status-col">
        <h2>$67,400,000</h2>
        <Record />
        </div>
        <div className="status-col">
        <h2>$21,826,560</h2>
        <Record />
        </div>
        <div className="status-col">
        <h2>$13,050,000</h2>
        <Record />
        </div>
        <div className="status-col">
        <h2>$1,154,000</h2>
        <Record />
        </div>
        </React.Fragment>
      );
    }
  }

export default RecordColumn;