import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import { useState } from "react";
import "./NavBar.css";

// had to jettison the search bar and category pages for now, but keeping the code for future reference

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav id="navbar" className="navbar">

      <div>
        <Link to="/shop">Shop</Link>
        &nbsp; | &nbsp;
        <Link to="/orders">Orders</Link>
        &nbsp; | &nbsp; 
        <Link to="/about">About</Link>
        {user ? (
          <>
            &nbsp; | &nbsp;
            <Link to="/profile">My Profile</Link>
            &nbsp; | &nbsp;
            <Link className="logout" to="" onClick={handleLogOut}>Log Out</Link>
            <div className="nav-welcome">
              <p>Welcome, {user.username}!</p>
            </div>
          </>
        ) : (
          <>
            &nbsp; | &nbsp;
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}