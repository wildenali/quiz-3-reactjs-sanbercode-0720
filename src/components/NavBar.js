import React, { useContext }  from "react"
import { Switch, Link, useHistory, Route } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import About from '../pages/About'
import Home from '../pages/Home'
import MovieList from '../pages/MovieList'
import Login from "../LoginPage/Login"
import { LoginContext } from '../LoginPage/LoginContext'

const NavBar = () => {
  const history = useHistory()
  // const [statusLogin, setStatusLogin ] = useContext(LoginContext)
  
  const handleLogOut = () => {
    // setStatusLogin(0);
    alert('Oke Logout')
    history.push("/")
  }


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
            {/* {
              statusLogin === 1 && <li><a><Link to="/movie-list">Movie List Editor</Link></a></li>
            } */}
            <li><a><Link to="/movie-list">Movie List Editor</Link></a></li>
            <li><a><Link to="/login">Login</Link></a></li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/movie-list"><MovieList /></Route>
        <Route path="/login"><Login /></Route>
      </Switch>
    </>
  )
}

export default NavBar