import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Index from './components/Index';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
      </Router>
    );
  }
}

export default App;
