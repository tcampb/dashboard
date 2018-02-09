import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Header from './Header.js';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
const url = 'http://localhost:3000/api';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: null
    }
  }

    componentDidMount() {
      axios.get(url)
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            this.setState({
              data: result.name
            });
          },
          (error) => {
            this.setState({
              error
            })
          }
        )
    }

  render() {
    return (
      <div className="App">
          <Header />
        <p className="App-intro">
          To get started, edit <code>{this.state.data}</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
