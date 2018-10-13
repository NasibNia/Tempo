import React from 'react';
import "./splash.css"
import HeaderBar from "../../components/HeaderBar";
import SignUp from "../../components/SignUp";
import Footer from "../../components/Footer";

// Animations
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Splash = () => {

    return (
        <div>
            <div className="splash-nav">
                <h4>Tempo</h4><h4>Preview</h4><h4>Pricing</h4>
            </div>
            <div className="splash-section section-1">
                <div className="text">
                    <h1>Play more music, earn more money</h1>
                    <Slide bottom>
                        <p className="subtitle">Tempo</p>
                    </Slide>
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
            <div className="splash-section section-3">
                <div className="research">
                    <div className="testimony1"></div>

                </div>
            </div>
            <div className="splash-section section-4">
                <div className="wrap">
                    <Fade bottom >
                        <div className="card lite">
                            <h3>Tempo <span className="icon1">Lite</span></h3>
                            <ul>
                                <li><img class="check" src={require('./iconography-05.png')}></img>Find Gigs</li>
                                <li><img class="check" src={require('./iconography-05.png')}></img>Lite News Feed</li>
                                <li><img class="check" src={require('./iconography-05.png')}></img>Career Roadmap</li>
                                <li><img class="check" src={require('./iconography-05.png')}></img>Calendar App</li>
                            </ul>
                        </div>
                    </Fade >
                    <Fade bottom>
                        <div className="card pro">
                            <h3>Tempo <span className="icon1">Pro</span></h3>
                            <ul>
                                <li><img class="check" src={require('./iconography-05.png')}></img>Priority Applications</li>
                                <li><img class="check" src={require('./iconography-05.png')}></img>Pro News Feed</li>
                                <li><img class="check" src={require('./iconography-05.png')}></img>Real-time stats</li>
                                <li><img class="check" src={require('./iconography-05.png')}></img>All Local Events Listings</li>
                                <li><img class="check" src={require('./iconography-05.png')}></img>Venue Directory</li>
                                <li><img class="check" src={require('./iconography-05.png')}></img>All Lite Features</li>
                                <li><img class="check" src={require('./iconography-05.png')}></img>Weekly Updates</li>
                            </ul>
                        </div>
                    </Fade >
                </div>
            </div>
            <Fade bottom>
                <SignUp />
            </Fade>
            <Footer />

        </div>
    )

}

export default Splash