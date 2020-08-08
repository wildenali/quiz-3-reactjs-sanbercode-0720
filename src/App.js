import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Index from './components/Index';

class App extends Component {
  render() {
    return (
      <div>
        <About />
        <Contact />
        <Index />
      </div>
    );
  }
}

export default App;
