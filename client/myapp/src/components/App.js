import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Header from './Header.js';
import Container from './Container.js';
import Target from '../targetData.js';
import Contact from '../contactData.js';
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
      error: null,
      filteredList: []
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(searchTerm, callback) {
    const re = new RegExp('^' + searchTerm + '.*', 'gi')
    const filteredList = Target.filter(record => record.company.match(re))
    this.setState({
      filteredList
    })
    callback(filteredList);
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
    console.log(this.state.filteredList);
    return (
      <div className="App">
          <Header records={Target} onChangeHandler={this.onChangeHandler} filteredList={this.state.filteredList}/>
          <Container records={Target} />
      </div>
    );
  }
}

export default App;
