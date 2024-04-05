import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">Pacific Roots</a>
      <ul>
        <img src="images/home_icon.png"></img>
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