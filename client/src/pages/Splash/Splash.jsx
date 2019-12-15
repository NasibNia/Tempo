import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderBar from "../../components/HeaderBar";
import SignUp from "../../components/SignUp";
import Footer from "../../components/Footer";

// Material-UI
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


// Animations
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import scrollToComponent from 'react-scroll-to-component';

import "./splash.css"

const styles = theme => ({
    loginButton: {
        margin: theme.spacing.unit,
        color: "white",
        borderColor: "white",
        backgroundColor: "rgb(255, 255, 255, 0.2)",
        '&:hover': {
            backgroundColor: "rgb(255, 255, 255, 0.4)",
            // color: theme.palette.primary.dark,
            // borderColor: theme.palette.primary.dark
        },
    },
    signupButton: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.light,
        '&:hover': {
            backgroundColor: "rgb(248, 105, 83)",

        },
    },
    input: {
        display: 'none',
    },
});

class Splash extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className="splash-nav">
                    <h4 onClick={() => scrollToComponent(this.top, { offset: 0, align: 'top', duration: 1200 })}>Tempo</h4>
                    <h4 onClick={() => scrollToComponent(this.preview, { offset: 0, align: 'top', duration: 1200 })}>Preview</h4>
                    <h4 onClick={() => scrollToComponent(this.pricing, { offset: 0, align: 'top', duration: 1200 })}>Pricing</h4>
                </div>
                <div className="splash-section section-1" ref={div => { this.top = div }}>
                    <div className="text">
                        <Slide top>
                            <img src="/assets/box-logo.png" alt="Tempo" id="tempo" />
                        </Slide>
                        <h1>Play More Music, Earn More Money</h1>

                        {/* <div className="sign-up-links">
                            <Link to = "/signin"><Button variant="outlined" color="default" className={classes.loginButton}>
                                LOG IN
                            </Button></Link>
                            <Button variant="contained" color="secondary" className={classes.signupButton} onClick={() => scrollToComponent(this.signup, { offset: -150, align: 'top', duration: 1200 })}>
                                SIGN UP
                            </Button>
                        </div> */}
                    </div>
                    <div id="background-overlay">
                        <video autoPlay muted loop>
                            <source src="./assets/concert.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="splash-section section-2">
                    <Fade bottom>
                        <h1>Tempo is a virtual booking agent that allows musicians to stay independent by mitigating the friction in the booking and gigging industry.</h1>
                    </Fade>
                </div>
                <div className="splash-section section-3" ref={div => { this.preview = div }}>

                    <div className="testimony1">
                        <Fade bottom>
                            <h1>‘TODAY, INDEPENDENT ARTISTS CAN DO EVERYTHING THAT MAJOR LABELS CAN.’</h1>
                            <p>'Back when I started in the ‘90s you didn’t have a choice, you were either signed or unsigned. Today independent artists can do everything that the major labels can, within reason, as long as they have the know-how and budget.'<br></br><br></br><span className="text-right">-Music Business Worldwide</span></p>
                            <h4></h4>
                        </Fade>
                    </div>

                    <div className="research">
                    </div>
                </div>
                <div className="splash-section section-4" ref={div => { this.pricing = div }}>
                    <div className="wrap">
                        <Fade bottom >
                            <div className="card lite">
                                <h3>Tempo <span className="icon1">Lite</span></h3>
                                <ul>
                                    <li><img className="check" src={require('./iconography-05.png')} alt="Find Gigs"></img>Find Gigs</li>
                                    <li><img className="check" src={require('./iconography-05.png')} alt="Lite News Feed"></img>Lite News Feed</li>
                                    <li><img className="check" src={require('./iconography-05.png')} alt="Career Roadmap"></img>Career Roadmap</li>
                                    <li><img className="check" src={require('./iconography-05.png')} alt="Calendar App"></img>Calendar App</li>
                                </ul>
                            </div>
                        </Fade >
                        <Fade bottom>
                            <div className="card pro">
                                <h3>Tempo <span className="icon1">Pro</span></h3>
                                <ul>
                                    <li><img className="check" src={require('./iconography-05.png')} alt="Priority Applications"></img>Priority Applications</li>
                                    <li><img className="check" src={require('./iconography-05.png')} alt="Pro News Feed"></img>Pro News Feed</li>
                                    <li><img className="check" src={require('./iconography-05.png')} alt="Real-Time Stats"></img>Real-Time Stats</li>
                                    <li><img className="check" src={require('./iconography-05.png')} alt="All Local Event Listings"></img>All Local Events Listings</li>
                                    <li><img className="check" src={require('./iconography-05.png')} alt="Venue Directory"></img>Venue Directory</li>
                                    <li><img className="check" src={require('./iconography-05.png')} alt="All Lite Features"></img>All Lite Features</li>
                                    <li><img className="check" src={require('./iconography-05.png')} alt="Weekly Updates"></img>Weekly Updates</li>
                                </ul>
                            </div>
                        </Fade >
                    </div>
                </div>
                <Fade>
                    <SignUp ref={div => { this.signup = div }} />
                </Fade>
                <Footer />

            </div>
        )
    }

}

Splash.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Splash);