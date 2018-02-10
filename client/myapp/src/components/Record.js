import React, { Component } from 'react';

class Record extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <a href="#" class="ui card" id="card">
            <h3>Dickenson plc</h3>
                <div class="content" id="card-content">
                <h4><strong>Annual Revenue:</strong><span> $50,000,000</span></h4>
                <h4><strong>Location:</strong><span> Kentucky</span></h4>
                <h4><strong>Deal Lead:</strong><span> Prospecting</span></h4>
                <h4><strong>Stage:</strong><span> Prospecting</span></h4>
                 </div>
              </a>
      );
    }
  }

export default Record;