import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./projectintro.css"

function ProjectIntro() {
  const location = useLocation();
  return (
    <div className="tile is-ancestor">
        <div className="column"></div>
      <div className="tile is-3 is-vertical is-parent">
        <div className="tile is-child box">
          <p className="title abouttitletext">Portfolio</p>
            <span className="subtitle subtitletext">
              <Link to="/portfolio" className={location.pathname === "/portfolio" ? "navbar-item is-active" : "navbar-item"}>
                Projects
        </Link>
            </span>
        </div>
      </div>
      <div className="tile is-3 is-vertical is-parent">
        <div className="tile is-child box">
          <p className="title abouttitletext"> Contact Me </p>
          <span className="subtitle subtitletext">
            <Link to="/getintouch" className={location.pathname === "/getintouch" ? "navbar-item is-active" : "navbar-item"}>
              Get In Touch
              </Link>
          </span>
        </div>
      </div>
      <div className="column is-3"></div>
    </div>
  )
};

export default ProjectIntro;