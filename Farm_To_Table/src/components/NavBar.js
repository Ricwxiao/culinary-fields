import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <div>
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
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;