import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./components/Splash";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";
import VenueHome from './pages/VenueHome';
import Testing from './components/Testing';
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/venue" component={VenueHome} />
        <Route exact path="/testing" component={Testing} />

        {/* <Route exact path="/signup" component={} /> */}
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
