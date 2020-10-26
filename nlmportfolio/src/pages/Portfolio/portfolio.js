import React from "react";
import { Link, useLocation } from "react-router-dom";
import ProjectGrid from "../../components/ProjectGrid/projectgrid";
import "./portfolio.css";
import Navbar from "../../components/Navbar/navbar";
import Hero from "../../components/Hero/hero";

function Portfolio() {
  const location = useLocation();
    return (
      <div>
      <Navbar/>
      {/* <Hero /> */}
{/* /* <section class="hero is-bold is-medium">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
          <p>Natalie Lauren McKee</p>
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
    </div> */ }
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title portfoliotitletext">
        A Glimpse at My Projects
      </h1>
    </div>
  </div>
  <ProjectGrid />
{/* </section> */}
</div>
    )
};

export default Portfolio;