import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Species from "./pages/Species";
import Creel from "./pages/Creel";
import Fishing from "./pages/Fishing/Fishing";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import MediaQuery from 'react-responsive';

function App() {
  return (
      <Router>
        <MediaQuery minDeviceWidth={768}>
          <Nav />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/species" component={Species} />
            <Route exact path="/creel" component={Creel} />
            <Route exact path="/fishing" component={Fishing} />
          </Wrapper>
          <Footer />
        </MediaQuery>
      </Router>
  );
}

export default App;
