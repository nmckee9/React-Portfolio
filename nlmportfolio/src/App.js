import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/portfolio";
import Contact from "./pages/Contact/contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";




const App = () => {

  return (
    <div>
      <Router>
        <ScrollToTop />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/getintouch" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );

}

export default App;