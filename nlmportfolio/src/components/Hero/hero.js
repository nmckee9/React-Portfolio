import React from 'react';
import logo from '../../images/profile.jpg';
import Navbar from "../Navbar/navbar";
import "./hero.css";


function Hero() {
  return (
    <section className="hero is-bold is-large heroBackground">
      <div className="hero-head">
        <Navbar />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title titletext">
            Hey There, I'm Natalie
      </h1>
          <img src={logo} alt="Logo" className="profile" />
          <h2 className="title titletext">A Front-End Web Developer </h2>
        </div>
      </div>
    </section>
  )
};

export default Hero;
