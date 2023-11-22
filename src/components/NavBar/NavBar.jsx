import React from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';
import logo from '../../pages/img/logo.png';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <div className='nav'>
        <img src={logo} alt="Mandrake Logo" className="nav-logo" />

        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        {user ? (
          <>
            <Link to="/plants">My Plants</Link>

            <Link to="/plants/new">Add New</Link>
            <Link to="" onClick={handleLogOut}>Log Out</Link>
          </>
        ) : (
          <>
            <Link to="/auth">Log In</Link>
          </>
        )}
      </div>
    </nav>
  );
}