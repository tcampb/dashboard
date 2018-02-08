import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
      fetch(url)
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>{this.state.data}</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
