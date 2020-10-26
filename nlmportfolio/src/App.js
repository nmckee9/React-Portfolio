import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/portfolio";
import Contact from "./pages/Contact/contact";




const App = () => {

  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/getintouch" component={Contact} />
        <Footer />
      </Router>
    </div>
  );

}

export default App;