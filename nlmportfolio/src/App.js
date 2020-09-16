import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./components/Hero/hero";
import Spacer from "./components/Spacer/spacer";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/portfolio";
import Contact from "./pages/Contact/contact";




const App = () => {

  return (
    <Router>
      <div>
        <Hero />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/getintouch" component={Contact} />
        <Footer />
      </div>
    </Router>  
  );

}

export default App;