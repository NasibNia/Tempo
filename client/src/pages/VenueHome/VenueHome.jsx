import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

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
              this.setState({ loggedIn: false });
            //   window.location.href = "/signin";
            } else {
              this.setState({ loggedIn: true });
              // this.loadShows(res.data.user.id);
            }
          });
    }


    render() {

        return (
            <div>
                <Body userType={this.state.user} url={this.props.match} />
            </div>
        )
    }

}

export default VenueHome;