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

  //``````````````````````````````commented out-Nasib
  // componentDidMount() {
  //   this.loadShows();
  //   console.log("test")
  //   console.log("params", this.props.match.params)

  //   // console.log(API.getUser());


  // }
  //``````````````````````````````Replaced-Nasib
  componentDidMount() {
    API.getUser().then(res => {
      console.log("component mounting check", res.data);
      if (!res.data.user) {
          window.location.href = "/signin";
      } else if (res.data.user.usertype === "venue") {
          window.location.href = "/venue";

      } else {
        this.setState({ loggedIn: true,
                        name:res.data.user.name, 
                      pic:res.data.user.profilePic});

        // this.loadShows(res.data.user.id);
      }
    });
  }

  //``````````````````````````````endOfChange-Nasib

  loadShows = () => {
    API.getShows()
      .then(res =>
        this.setState({ shows: res.data, name: "", description: "", statistics: "" })
      )
      .catch(err => console.log(err));
  };


  render() {

    return (
      <div>
        {console.log(this.props.match.params.id)}
        <Body userType={this.state.user} name={this.state.name} pic={this.state.pic}/>
      </div>
    )
  }

}

export default ArtistHome;