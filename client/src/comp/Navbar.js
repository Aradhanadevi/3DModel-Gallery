import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Bgimg/coffecup.png'
// import './Css/Navbar.css';

export const Navbar = () => {
  const name = localStorage.getItem('name');
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=" " />
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/home">
            Home <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/free">Explore</NavLink>
        </li>
        {name && name !== 'undefined' && (
            <li className="nav-item">
              {/* Redirect to profile page when clicking on the name */}
              <NavLink className="nav-link" to="/profile">Welcome, {name}</NavLink>
            </li>
          )}
      </ul>
    </div>
  </nav>
  )
};

export default Navbar;