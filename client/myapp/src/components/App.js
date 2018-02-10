import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Header from './Header.js';
import Container from './Container.js';
import db from '../dummyData.js';
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
          <Header records={db} />
          <Container records={db} />
      </div>
    );
  }
}

export default App;
