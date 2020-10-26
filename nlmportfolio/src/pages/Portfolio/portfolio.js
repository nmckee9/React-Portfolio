import React from "react";
import ProjectGrid from "../../components/ProjectGrid/projectgrid";
import "./portfolio.css";
import Navbar from "../../components/Navbar/navbar";

function Portfolio() {
  return (
    <div>
      <Navbar />
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title portfoliotitletext">
            A Glimpse at My Projects
      </h1>
        </div>
      </div>
      <ProjectGrid />
    </div>
  )
};

export default Portfolio;