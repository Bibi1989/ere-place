import React from "react";
import { Nav } from "./NavBarStyle";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Nav>
      <div className='nav-logo'>
        <Link to='/'>
          <h2>Ere Place</h2>
        </Link>
      </div>
      <div className='nav-list'>
        <ul>
          <li>
            <input type='text' placeholder='Search for a clothing...' />
          </li>
        </ul>
      </div>
      <div className='nav-cart'>
        <p>
          <i className='fas fa-heart'></i>
        </p>
        <p>
          <i className='fas fa-cart-plus'></i>
        </p>
        <p>Login</p>
        <p>Register</p>
      </div>
    </Nav>
  );
};

export default NavBar;
