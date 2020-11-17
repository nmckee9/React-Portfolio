import React from 'react';
import './skydive.css';
import skydive from '../../images/Skydivegif.gif';




function Intro() {
    return (
    <div>
  <section className="section">
    <div className="container has-text-centered">
    <img src={skydive} alt="skydove" className="skydive" />
    </div>
  </section>
</div>
    )
};

export default Intro;