import React, { Component } from 'react';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
