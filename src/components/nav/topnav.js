import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return(
    <nav className="navbar">
      <a href="/#" className="title">
      <h4>Public API Explorer</h4>
      </a>
        <ul className="main-nav" id="js-menu">
          <li>
              <Link to="/" className="nav-links" >
              Home
              </Link>
          </li>
          <li>
              <Link to="/NASA" className="nav-links" >
              NASA
              </Link>
          </li>
          <li>
              <Link to="/Jobs" className="nav-links" >
              Jobs
              </Link>
          </li>
        </ul>
    </nav>
  )
}
export default Nav
