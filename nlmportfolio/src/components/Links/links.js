import React from 'react';
import "./link.css";


function Links() {
  return (
    <div>
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
              <a href="mailto:nmckee9@gmail.com" class="button is-outlined is-info is-link">
                Send an Email
                </a>
            </div>
            
        </div>
  )
};

export default Links;