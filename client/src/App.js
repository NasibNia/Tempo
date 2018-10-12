import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Splash from "./components/Splash";
// import Footer from "./components/Footer";
// import NoMatch from "./components/NoMatch";
// import Testing from './components/Testing';

//PAGES
import VenueHome from './pages/VenueHome';
import ArtistHome from './pages/ArtistHome';
import SignUp from "./pages/SignUp";
import Terms from "./pages/TermsAndConditions";
import Privacy from "./pages/PrivacyPolicy"
import Philanthropy from "./pages/SFSkateClub"
import Careers from "./pages/Careers"
import Contact from "./pages/Contact"
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
// import Threejs from "./pages/Threejs";

//STYLING
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8D4651',
      main: '#741D2B',
      dark: '#551620',
      contrastText: '#fff',
    },
    secondary: {
      light: '#FF7460',
      main: '#FF4025',
      dark: '#E83B22',
      contrastText: '#fff',
    },
  },
});

const App = () => (
  <Router>
    <div>
      <MuiThemeProvider theme={theme}>
        <Switch>
          {/* <Route exact path="/" component={Splash} /> */}
          <Route exact path="/venue" component={VenueHome} />
          <Route exact path="/artist" component={ArtistHome} />
          {/* <Route exact path="/testing" component={Testing} /> */}
          <Route exact path="/signup" component={SignUp} /> 
          <Route exact path="/signin" component={SignIn} />       
          <Route exact path="/profile" component={Profile}/>     
          <Route exact path="/contact" component={Contact} />         
          <Route exact path="/careers" component={Careers} />         
          <Route exact path="/sutromusic" component={Careers} />                   
          {/* <Route exact path="/threejs" component={Threejs} /> */}
          <Route exact path="/terms" component={Terms}/>
          <Route exact path="/privacy" component={Privacy}/>
          <Route exact path="/sfskateclub" component={Philanthropy}/>
          {/* <Route component={NoMatch} /> */}
        </Switch>
        {/* <Footer /> */}
      </MuiThemeProvider>
    </div>
  </Router>
);

export default App;
