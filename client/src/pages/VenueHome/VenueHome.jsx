import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Body from "../../components/Body";

import API from "../../utils/API";


import "./VenueHome.css";

const styles = {

    column: {
        position: "fixed"
    }
}

class VenueHome extends Component {

    state = {
        bands: [],
        name: "",
        description: "",
        statistics: "",
        user: "venue",
        loggedIn: true
    };

    componentDidMount() {
        API.getUser().then(res => {
            console.log("component mounting check", res.data);
            if (!res.data.user) {
                window.location.href = "/signin";
            } else if (res.data.user.userType === "artist") {
                window.location.href = "/artist";
            } else {
                console.log("user is venue")
                this.setState({
                    // loggedIn: true,
                    name: res.data.user.name
                });
                // this.loadShows(res.data.user.id);
            }
        });
    }


    render() {

        return (
            <div>
                {/* <Body /> */}
                <Body userType={this.state.user} url={this.props.match} name={this.state.name} />

            </div>
        )
    }
}

export default VenueHome;