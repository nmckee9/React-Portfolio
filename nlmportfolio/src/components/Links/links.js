import React from 'react';
import "./link.css";


function Links() {
  return (
    <div>
            <div className="buttons is-centered">
              <a target="blank" href="https://www.linkedin.com/in/natalielaurenmckee/" className="button is-link">
                <span className="icon linktext">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </span>
                <span>LinkedIn</span>
              </a>
              <a target="blank" href="https://github.com/nmckee9" className="button">
                <span className="icon">
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </span>
                <span>GitHub</span>
              </a>
              <a href="mailto:nmckee9@gmail.com" className="button is-outlined is-info is-link">
                Send an Email
                </a>
            </div>
            
        </div>
  )
};

export default Links;