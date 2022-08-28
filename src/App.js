import React from "react";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// pages
import Header from './components/Header';
import Intro from './pages/Intro';
import Capability from './pages/Capability';
import Contact from './pages/Contact';
import Work from './pages/Work';
// import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Capability />
      <Work />
      <Contact />
      {/* <Footer /> */}
    </div>

    // <Router>
    //   <Switch>
    //     <Route path="/contact">
    //       <Contact />
    //     </Route>
    //     <Route path="/work">
    //       <Work />
    //     </Route>
    //     <Route path="/about">
    //       <About />
    //     </Route>
    //     <Route path="/">
    //       <Home />
    //     </Route>
    //   </Switch>
    // </Router>
  );
};

export default App;
