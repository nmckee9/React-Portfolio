import React from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../../images/IMG_2944.jpeg'; 
import '../Hero/hero.css';


function Hero() {
  const location = useLocation();
    return (
<section class="hero is-light is-bold is-medium">
{/* <img src={logo} alt="Logo" /> */}
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
          <p>natalie lauren mckee</p>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
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
      <h1 class="title">
        Hi I'm Natalie
      </h1>
      <h2 class="subtitle">
        A Front-End Web Developer
      </h2>
    </div>
  </div>
  
</section>
    )
};

export default Hero;
