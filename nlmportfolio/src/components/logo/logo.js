import React from 'react';
import logo from '../../images/nlmlogo.png'; 
import "./logo.css";



function Logo() {
    return (
    <body>
  <section class="section spacing">
    <div class="container has-text-centered">
    <img src={logo} alt="Logo" className="profile" />
      <h2></h2>
    </div>
  </section>
</body>
    )
};

export default Logo;