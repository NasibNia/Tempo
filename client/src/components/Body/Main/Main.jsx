import React, { Component } from 'react';
import MainSide from "./MainSide";
import MainMiddle from "./MainMiddle";

// Utilities
import API from "../../../utils/API";

import "./Main.css";

class Main extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        if (this.props.userType === "venue") {
            API.getReadyBands()
                .then(res => {
                    // console.log(res);
                    this.setState({ data: res.data })
                }
                )
                .catch(err => console.log(err));
        }
        else if (this.props.userType === "artist") {
            API.getReadyVenues()
                .then(res => {
                    this.setState({ data: res.data })
                }
                )
                .catch(err => console.log(err));
        }
    }

    render() {
        console.log("early data", this.state.data)
        return (
            <div className="main">
                <MainMiddle userType={this.props.userType} url={this.props.url} name={this.props.name}/>
                <MainSide userType={this.props.userType} data={this.state.data}/>
            </div>
        )
    }

}

export default Main;