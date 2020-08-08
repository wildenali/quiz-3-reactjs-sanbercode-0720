import React from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import About from './About'
import Home from './Home'
import MovieList from './MovieList'

const NavBar = () => {
  return (
    <>
      <br/>
      <br/>
      <br/>
      <header>
        <img id="logo" src={ logo } width="200px" />
        <nav>
          <ul>
            <li><a><Link to="/">Home</Link></a></li>
            <li><a><Link to="/about">About</Link></a></li>
            <li><a><Link to="/movie-list">Movie List Editor</Link></a></li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/movie-list"><MovieList /></Route>
      </Switch>
    </>
  )
}

export default NavBar