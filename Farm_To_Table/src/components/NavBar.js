import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo-header">
        <img className="logo" src={ require("./img/navbarlogo.png")}/> 
        <a className="site-title" href="/">Pacific Roots</a>
      </div>
      <ul>
        <li className='nav-item'>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/farmfinder" className="nav-link">
            Farm & Food Finder
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/events" className="nav-link">
            Events
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/recipes" className="nav-link">
            Recipes
          </NavLink>
        </li>
      </ul>
    </nav>
)
}
// example
export default Navbar;