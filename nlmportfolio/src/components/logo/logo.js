import React from 'react';
import logo from '../../images/nlmlogo.png'; 
import "./logo.css";



function Logo() {
    return (
    <div>
  <section className="section spacing">
    <div className="container has-text-centered">
    <img src={logo} alt="Logo" className="profile" />
    </div>
  </section>
</div>
    )
};

export default Logo;