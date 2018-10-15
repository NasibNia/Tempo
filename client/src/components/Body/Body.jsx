import React, { Component } from 'react';
import Main from "./Main";
import Navigate from "./Navigate";
import HeaderBar from "../HeaderBar";

import "./body.css";

class Body extends Component {

    state = {
        userType: this.props.userType,
        mainComponent: "newsFeed"
    }

    changeState(val) {
        this.state.mainComponent = val
    }

    render() {

        return (
            <div>
                <HeaderBar userType={this.state.userType} />
                <div className="body-wrap">
                    <Navigate method={this.changeState} userType={this.state.userType} />
                    <Main userType={this.state.userType} url={this.props.url} name={this.props.name}/>
                </div>
            </div>
        )
    }

}

export default (Body);