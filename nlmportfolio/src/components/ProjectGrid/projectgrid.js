import React from 'react';
import rabbit from '../../images/rabbit.png'; 
import burger from '../../images/burger.png';
import employee from '../../images/employee.png';
import mealmaps from '../../images/mealmaps.png';
import weather from '../../images/weather.png';
import happilywoke from '../../images/happilywoke.png';
import './projectgrid.css';

function ProjectGrid() {
  return (
    <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box">
          <p className="title has-text-centered titletext">Eat The Krabby Patty</p>
          <img src={burger} className="burger" />
          <p className="has-text-centered">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          <p className="buttons" />
          <a className="button githubbutton is-centered" target="_blank" href="https://github.com/nmckee9/Burger">
            <span className="icon">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span>Repo</span>
          </a>
          <a className="button herokubutton" target="_blank" href="https://thawing-basin-34765.herokuapp.com/">
            <span className="icon">
              <i className="iconify" data-icon="logos-heroku-icon" data-inline="false"></i>
            </span>
            <span>Deployed</span>
            </a>
        </div>
        <div className="tile is-child box">
          <p className="title has-text-centered titletext">Employee User Directory</p>
          <div className="is-one-quarter has-text-centered">
          <img src={employee} className="employee" />
          </div>
          <p className="has-text-centered">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          <p className="buttons" />
          <a className="button githubbutton" target="_blank" href="https://github.com/nmckee9/Employee-Tracker-React">
            <span className="icon">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span>Repo</span>
          </a>
        </div>
      </div>
      <div className="tile is-vertical is-parent">
        <div className="tile is-child box">
          <p className="title has-text-centered titletext">Rabbit Hole</p>
          <div className="is-one-quarter has-text-centered">
          <img src={rabbit} alt="rabbit" className="rabbit" />
          </div>
          <p className="has-text-centered"> Allows music lovers and knowledge seekers alike to expand upon their interests and be a discoverer of new knowledge</p>
          <p className="buttons" />
          <a className="button githubbutton" target="_blank" href="https://github.com/maquispe/Project-2">
            <span className="icon">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span>Repo</span>
          </a>
          <a className="button herokubutton" target="_blank" href="https://discover-rabbit-hole.herokuapp.com/">
            <span className="icon">
              <i className="iconify" data-icon="logos-heroku-icon" data-inline="false"></i>
            </span>
            <span>Deployed</span>
            </a>
        </div>
        <div className="tile is-child box">
          <p className="title has-text-centered titletext">Weather DashBoard</p>
          <div className="is-one-quarter has-text-centered">
          <img src={weather} className="weather" />
          </div>
          <p className="has-text-centered">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          <p className="buttons" />
          <a className="button githubbutton" target="_blank" href="https://github.com/nmckee9/Weather-Dashboard">
            <span className="icon">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span>Repo</span>
          </a>
          <a className="button githubbutton" target="_blank" href="https://nmckee9.github.io/Weather-Dashboard/">
            <span className="icon">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span>Deployed</span>
          </a>
        </div>
      </div>
      <div className="tile is-vertical is-parent">
        <div className="tile is-child box">
          <p className="title has-text-centered titletext">Meal Maps</p>
          <img src={mealmaps} className="mealmaps" />
          <p className="has-text-centered"> Allows music lovers and knowledge seekers alike to expand upon their interests and be a discoverer of new knowledge</p>
          <p className="buttons" />
          <a className="button githubbutton" target="_blank" href="https://lulamoon96.github.io/Project-1/">
            <span className="icon">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span>Repo</span>
          </a>
          <a className="button herokubutton" target="_blank" href="https://lulamoon96.github.io/Project-1/">
            <span>Deployed</span>
            </a>
        </div>
        <div className="tile is-child box">
          <p className="title has-text-centered titletext">Happily Woke</p>
          <div className="is-one-quarter has-text-centered">
          <img src={happilywoke} className="happilywoke" />
          </div>
          <p className="has-text-centered">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          <p className="buttons" />
          <a className="button githubbutton" target="_blank" href="https://github.com/nmckee9/Weather-Dashboard">
            <span className="icon">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span>Repo</span>
          </a>
          <a className="button githubbutton" target="_blank" href="https://nmckee9.github.io/Weather-Dashboard/">
            <span className="icon">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span>Deployed</span>
          </a>
        </div>
      </div>
    </div>
  )
};

export default ProjectGrid;
