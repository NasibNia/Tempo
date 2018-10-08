import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./components/Splash";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";
import Testing from './components/Testing';

import VenueHome from './pages/VenueHome';
import ArtistHome from "./pages/ArtistHome";

import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#E55934',
      main: '#741D2B',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5B85AA',
      main: '#FF4025',
      dark: '#372248',
      contrastText: '#fff',
    },
  },
});


const App = () => (
  <Router>
    <div>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/venue" component={VenueHome} />
          <Route exact path="/artist" component={ArtistHome} />
          <Route exact path="/testing" component={Testing} />

          {/* <Route exact path="/signup" component={} /> */}
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </MuiThemeProvider>
    </div>
  </Router>
);

export default App;
