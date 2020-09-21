import React from 'react';
// import Projects from "../../../projects.json";
// import ProjectCard from '../ProjectCard/projectcard';
import ProjectCard from '../ProjectCard/projectcard';

function ProjectGrid() {
  return (
    <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title has-text-centered titletext">Eat The Krabby Patty</p>
          <img src="../../../src/images/burger.png is-centered" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          <p class="buttons" />
          <a class="button githubbutton is-centered" target="_blank" href="https://github.com/nmckee9/Burger">
            <span class="icon">
              <i class="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span>Repo</span>
          </a>
          <a class="button herokubutton" target="_blank" href="https://thawing-basin-34765.herokuapp.com/">
            <span class="icon">
              <i class="iconify" data-icon="logos-heroku-icon" data-inline="false"></i>
            </span>
            <span>Deployed</span>
            </a>
        </div>
        <div class="tile is-child box">
          <p class="title has-text-centered titletext">Employee User Directory</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          <p class="buttons" />
          <a class="button githubbutton" target="_blank" href="https://github.com/nmckee9/Employee-Tracker-React">
            <span class="icon">
              <i class="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span>Repo</span>
          </a>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title has-text-centered titletext">Rabbit Hole</p>
          <img src="../../../src/images/rabbit.png" />
          <p>Allows music lovers and knowledge seekers alike to expand upon their interests and be a discoverer of new knowledge</p>
          <p class="buttons" />
          <a class="button githubbutton" target="_blank" href="https://github.com/maquispe/Project-2">
            <span class="icon">
              <i class="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span>Repo</span>
          </a>
          <a class="button herokubutton" target="_blank" href="https://discover-rabbit-hole.herokuapp.com/">
            <span class="icon">
              <i class="iconify" data-icon="logos-heroku-icon" data-inline="false"></i>
            </span>
            <span>Deployed</span>
            </a>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title has-text-centered titletext">Meal Maps</p>
          <img src="../../../src/images/rabbit.png" />
          <p>Allows music lovers and knowledge seekers alike to expand upon their interests and be a discoverer of new knowledge</p>
          <p class="buttons" />
          <a class="button githubbutton" target="_blank" href="https://lulamoon96.github.io/Project-1/">
            <span class="icon">
              <i class="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span>Repo</span>
          </a>
          <a class="button herokubutton" target="_blank" href="https://lulamoon96.github.io/Project-1/">
            <span>Deployed</span>
            </a>
        </div>
      </div>
    </div>
  )
};

export default ProjectGrid;
