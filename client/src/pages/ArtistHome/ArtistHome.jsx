import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import Body from "../../components/Body";
import API from "../../utils/API";
import axios from "axios";

import "./ArtistHome.css";

const styles = {}

class ArtistHome extends Component {

  state = {
    shows: [],
    user: "artist",
    loggedIn: true,
    name: "",
    pic: ""
  };
  
  componentDidMount() {

    API.getUser().then(res => {
      console.log("artistHome component mounting check", res.data);
      if (!res.data.user) {
          window.location.href = "/signin";
      } else if (res.data.user.userType === "venue") {
          window.location.href = "/venue";

      } else {

        // this.setState({ pic:res.data.user.profilePic});

      }
    });
  }

  //``````````````````````````````endOfChange-Nasib

  loadShows = () => {
    API.getShows()
      .then(res =>
        this.setState({ shows: res.data})

        // this.setState({ shows: res.data, name: "", description: "", statistics: "" })
      )
      .catch(err => console.log(err));
  };


  render() {

    return (
      <div>
        {/* {console.log("render item " + this.state.name)} */}
        {/* <Body pic={this.state.pic}/> */}
        <Body userType={this.state.user}  />

        
      </div>
    )
  }

}

export default ArtistHome;