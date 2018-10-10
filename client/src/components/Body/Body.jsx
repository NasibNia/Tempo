import React, { Component } from 'react';
import Main from "./Main";
import Navigate from "./Navigate";
import HeaderBar from "../HeaderBar";

import "./body.css";

class Body extends Component {

    state = {
        mainComponent: "newsFeed"
    }

    changeState(val) {
        this.state.mainComponent = val
    }

    render() {

        return (
            <div>
                <HeaderBar/>
                <div className="body-wrap">
                    <Navigate method={this.changeState} />
                    <Main />
                </div>
            </div>
        )
    }

}

export default (Body);