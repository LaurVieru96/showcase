import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <p>Your showcase</p>
        </div>
        <div className="navbar-right">
          <ul className="navbar-list">
            <Link to="/">Home</Link>
            <Link to="/add">Add</Link>
            <Link to="/projects">Projects</Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
