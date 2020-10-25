import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./projectintro.css"

function ProjectIntro() {
  const location = useLocation();
    return (
        <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child box">
            <p class="title abouttitletext">Contact Me </p>
            <p />
            <p class="subtitle subtitletext">
            <Link to="/getintouch" className={location.pathname === "/getintouch" ? "navbar-item is-active" : "navbar-item"}>
          Get In Touch
        </Link>
            </p>
          </div>
          </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="title abouttitletext">Portfolio</p>
            <p />
            <p class="subtitle subtitletext">
            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "navbar-item is-active" : "navbar-item"}>
          Projects
        </Link>
            </p>
    <a href="">
      </a>
        </div>
      </div>
      </div>
    )
};

export default ProjectIntro;