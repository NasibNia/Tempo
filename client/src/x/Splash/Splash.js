import React, { Component } from 'react';
import "./Splash.css"


class Splash extends Component {

    render() {

        return (
            <div id = "background-overlay">
                <video autoPlay muted loop>
                    <source src="./assets/concert.mp4" type="video/mp4" />
                </video>
            </div>
        )
    }

}

export default Splash;