import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./projectintro.css"

function ProjectIntro() {
  const location = useLocation();
    return (
        <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child box">
            <p className="title abouttitletext">Contact Me </p>
            <p />
            <p className="subtitle subtitletext">
            <Link to="/getintouch" className={location.pathname === "/getintouch" ? "navbar-item is-active" : "navbar-item"}>
          Get In Touch
        </Link>
            </p>
          </div>
          </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className="title abouttitletext">Portfolio</p>
            <p />
            <p className="subtitle subtitletext">
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