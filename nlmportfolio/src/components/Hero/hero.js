import React from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../../images/profile.jpg'; 
import Navbar from "../Navbar/navbar";
import "./hero.css";


function Hero() {
  const location = useLocation();
    return (
<section class="hero is-bold is-large heroBackground">
  <div class="hero-head">
  <Navbar />
  </div>
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title titletext">
        Hey There, I'm Natalie 
      </h1>
      <img src={logo} alt="Logo" className="profile" />
      <h2 class="title titletext">A Front-End Web Developer </h2>
    </div>
  </div>
</section>
    )
};

export default Hero;
