import React from 'react';
import About from "../../components/About/about";
import "./link.css";


function Links() {
  return (
    <div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title touchtext">
            Get In Touch
      </h1>
          <h2 class="subtitle touchtext">You Can Find Me Here </h2>
            <div class="buttons is-centered">
              <a target="blank" href="https://www.linkedin.com/in/natalielaurenmckee/" class="button is-link">
                <span class="icon linktext">
                  <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </span>
                <span>LinkedIn</span>
              </a>
              <a target="blank" href="https://github.com/nmckee9" class="button">
                <span class="icon">
                  <i class="fa fa-github-square" aria-hidden="true"></i>
                </span>
                <span>GitHub</span>
              </a>
            </div>
            <a href="mailto:nmckee9@gmail.com" class="button is-outlined is-info is-link">
                Send an Email
                </a>
        </div>
      </div>
    </div>
  )
};

export default Links;