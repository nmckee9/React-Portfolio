import React from 'react';
import "./style.css"

function About() {
    return (
<div>

<div className="columns">
  <div className="column is-4 has-text-centered">
  <div className="">
  <p className="title is-small abouttitletext">
  Passionate Learner
    </p>
    <p />
     <p className="subtitle subtitletext">  Continually Seeking New Skills  </p>
    </div>
  </div>
  <div className="column is-4 has-text-centered">
  <p className="title is-small abouttitletext">
  Wildly Curious
    </p>
    <p />
    <p className="subtitle subtitletext"> Never-Ending Quest for New Places and Knowledge </p>
  </div>
  <div className="column is-4 has-text-centered">
  <p className="title is-small abouttitletext">
  Human Connection
    </p>
    <p />
   <p className="subtitle subtitletext">Thrive on People Interactions and Connections</p> 
  </div>
</div>
</div>
    )
};

export default About;
