import React from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../../images/profile.jpg'; 
import Spacer from "../Spacer/spacer";
import "./hero.css";


function Hero() {
  const location = useLocation();
    return (
<section class="hero is-bold is-medium heroBackground">
  <div class="hero-head">
    <nav class="navbar is-transparent">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
          <Link to="/" className={location.pathname === "/" ? "navbar-item is-active" : "navbar-item"}>
          Natalie Lauren McKee
        </Link>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu navbartext">
          <div class="navbar-end">
          <Link to="/" className={location.pathname === "/" ? "navbar-item is-active" : "navbar-item"}>
          Home
        </Link>
        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "navbar-item is-active" : "navbar-item"}>
          Projects
        </Link>
        <Link to="/getintouch" className={location.pathname === "/getintouch" ? "navbar-item is-active" : "navbar-item"}>
          Get In Touch
        </Link>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title titletext">
        Hey There
      </h1>
      <img src={logo} alt="Logo" className="profile" />
      <h2 class="title titletext">I'm Natalie </h2>
      
    </div>
  </div>
</section>
    )
};

export default Hero;
