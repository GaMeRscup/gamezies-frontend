import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Games from './Games';
import Playlist from './Playlist';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      game: []

    }
  }
  render() {
  return (
    <div className="App">

    </div>
  );
  }
}

export default App;
