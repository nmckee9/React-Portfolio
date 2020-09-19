import React from "react";
import { Link, useLocation } from "react-router-dom";
import Links from "../../components/Links/links";
import Spacer from "../../components/Spacer/spacer";


function Contact() {
  const location = useLocation();
    return (
<section class="hero is-bold is-medium">
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
  <Links />
  <Spacer />
  <Spacer />
</section>




    )
};

export default Contact;