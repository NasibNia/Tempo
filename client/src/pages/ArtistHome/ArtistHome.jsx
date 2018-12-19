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
    pic: "",
    userId: 0
  };
  
  componentDidMount() {

    API.getUser().then(res => {
      console.log("artistHome component mounting check", res.data);
      if (!res.data.user) {
          window.location.href = "/signin";
      } else if (res.data.user.userType === "venue") {
          window.location.href = "/venue";

      } else {

        this.setState({ 
          pic:res.data.user.profilePic,
          name:res.data.user.name,
          userId: res.data.user.name.id
        });

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
        <Body userType={this.state.user}  pic={this.state.pic} name={this.state.name} id={this.state.userId}/>

        
      </div>
    )
  }

}

export default ArtistHome;