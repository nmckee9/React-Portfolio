import React from 'react';
import rabbit from '../../images/rabbit.png'; 
import burger from '../../images/burger.png';
import weather from '../../images/weather.png';
import happilywoke from '../../images/happilywoke.png';
import './projectgrid.css';

function ProjectGrid() {
  return (
    <div className="tile">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box">
        <p className="title has-text-centered titletext">Happily Woke</p>
          <div className="is-one-quarter has-text-centered">
          <img src={happilywoke} alt="happilywoke" className="happilywoke" />
          </div>
          <p className="has-text-centered"> In a time of constant negative news, users should be exposed to more positive, uplifting stories and articles relevant to their individual preferences </p>
          <p className="buttons" />
          <a className="button githubbutton" target="_blank" rel="noopener noreferrer" href="https://github.com/Leon0917/final-project">
            <span className="icon">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span>Repo</span>
          </a>
          <a className="button githubbutton" target="_blank" rel="noopener noreferrer" href="https://arcane-chamber-66986.herokuapp.com/">
            <span className="icon">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span>Deployed</span> 
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
          <a className="button githubbutton" target="_blank" rel="noopener noreferrer" href="https://github.com/maquispe/Project-2">
            <span className="icon">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span>Repo</span>
          </a>
          <a className="button herokubutton" target="_blank" rel="noopener noreferrer" href="https://discover-rabbit-hole.herokuapp.com/">
            <span className="icon">
              <i className="iconify" data-icon="logos-heroku-icon" data-inline="false"></i>
            </span>
            <span>Deployed</span>
            </a>
        </div>
      </div>
      <div className="tile is-vertical is-parent">
        <div className="tile is-child box is-one-quarter">
        <p className="title has-text-centered titletext">Eat The Krabby Patty</p>
          <img src={burger} alt="burger" className="burger" />
          <p className="has-text-centered">A hamburger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!)</p>
          <p className="buttons" />
          <a className="button githubbutton is-centered" target="_blank" rel="noopener noreferrer" href="https://github.com/nmckee9/Burger">
            <span className="icon">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span>Repo</span>
          </a>
          <a className="button herokubutton" target="_blank" rel="noopener noreferrer" href="https://thawing-basin-34765.herokuapp.com/">
            <span className="icon">
              <i className="iconify" data-icon="logos-heroku-icon" data-inline="false"></i>
            </span>
            <span>Deployed</span>
            </a>
        </div>
      </div>
      <div className="tile is-vertical is-parent">
      <div className="tile is-child box">
          <p className="title has-text-centered titletext">Weather Dashboard</p>
          <div className="is-one-quarter has-text-centered">
          <img src={weather} alt="weather" className="weather" />
          </div>
          <p className="has-text-centered">Weather application that allows you to search for a city and view the current weather, as well as the five-day forecast</p>
          <p className="buttons" />
          <a className="button githubbutton" target="_blank" rel="noopener noreferrer"href="https://github.com/nmckee9/Weather-Dashboard">
            <span className="icon">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span>Repo</span>
          </a>
          <a className="button githubbutton" target="_blank" rel="noopener noreferrer" href="https://nmckee9.github.io/Weather-Dashboard/">
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
