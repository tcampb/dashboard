import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Modal from './Modal.js';
import Header from './Header.js';
import Container from './Container.js';
import Targets from '../targetData.js';
import Contacts from '../contactData.js';
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
    const re = new RegExp('^' + searchTerm + '.*', 'gi');
    const companyContactArray = Targets.concat(Contacts);
    let filteredList = companyContactArray.filter(record => record.name.match(re));
    // Return first 5 results
    filteredList = filteredList.slice(0, 5);
    this.setState({
      filteredList
    })
    callback(filteredList);
  }

  createOverlay() {

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
      <Router>
      <div className="App">
          <Modal />
          <Header records={Targets} contactRecords={Contacts} onChangeHandler={this.onChangeHandler} filteredList={this.state.filteredList}/>
          <Container records={Targets} />
      </div>
      </Router>
    );
  }
}

export default App;
