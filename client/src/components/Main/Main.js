import React, { Component } from 'react';
import Panel from "../Panel";
import Navigate from "../Navigate";
import MainSide from "./MainSide";
import MainMiddle from "./MainMiddle";


import "./Main.css";

class Main extends Component {

    render() {
        return (

            <div className="main">
                <MainMiddle />
                <MainSide />
            </div>
        )
    }
}

export default Main;