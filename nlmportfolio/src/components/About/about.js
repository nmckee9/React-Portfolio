import React from 'react';
import logo from '../../images/profile.jpg'; 
import "./style.css"

function About() {
    return (
<div>

<div class="columns">
  <div class="column is-4 has-text-centered">
  <div class="">
  <p class="title is-small abouttitletext">
  Wildly Curious
    </p>
    Never-Ending Quest for New Places and Knowledge
    <p />
    </div>
  </div>
  <div class="column is-4 has-text-centered">
  <p class="title is-small abouttitletext">
  Passionate Learner
    </p>
    Continually Seeking New Skills 
      <p />
  </div>
  <div class="column is-4 has-text-centered">
  <p class="title is-small abouttitletext">
  Human Connection
    </p>
    Thrive on People Interactions and Connections
    <p />
  </div>
</div>
</div>
    )
};

export default About;
