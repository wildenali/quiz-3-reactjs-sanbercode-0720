import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
