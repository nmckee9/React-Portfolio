import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    const location = useLocation();
    return (
    <nav className="navbar is-transparent">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className={location.pathname === "/" ? "navbar-item is-active has-text-grey" : "navbar-item"}>
              Natalie Lauren McKee
            </Link>
              <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
    </a>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu navbartext">
              <div className="navbar-end">
              <Link to="/" className={location.pathname === "/" ? "navbar-item is-active has-text-grey" : "navbar-item"}>
              Home
            </Link>
            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "navbar-item is-active has-text-grey" : "navbar-item"}>
              Projects
            </Link>
            <Link to="/getintouch" className={location.pathname === "/getintouch" ? "navbar-item is-active has-text-grey" : "navbar-item"}>
              Get In Touch
            </Link>
              </div>
            </div>
          </div>
        </nav>
    )};

export default Navbar;
