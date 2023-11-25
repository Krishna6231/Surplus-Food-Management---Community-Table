import React from 'react';
import { Link } from 'react-router-dom';
import './comp.css';

const Navbar = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="nav-bar">
          <div className="brand">
            <span></span>
            <h2 className='tit'>CommunityTable</h2>
          </div>
          <div className='nav-options'>
            <Link to={"/"} className='nav-option'>
              <span>Home</span>
            </Link>
            <Link to={"/about"} className='nav-option'>
              <span>About</span>
            </Link>
            <Link to={"/contact"} className='nav-option'>
              <span>Donate</span>
            </Link>
            <Link to={"/admin"} className='nav-option'>
              <span>Admin</span>
            </Link>
            <Link to={"/login"} className='nav-option'>
              <span>Sign In / Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
