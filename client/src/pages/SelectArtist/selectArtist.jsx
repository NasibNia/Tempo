import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import HeaderBar from "../../components/HeaderBar"
import SelectArtistArray from "../../components/SelectArtist/Array/"
import Criterion from "../../components/SelectArtist/Criterion"

import API from "../../utils/API";
import axios from "axios";


import "./selectartist.css"

const styles = {}

class SelectArtist extends Component {

  state = {
    loggedIn: true,
    userType: "",
    userId: 0,
    name: "",
    genres: {
      rock: false,
      club: false,
      electronic: false,
      hiphop: false,
      pop: false,
      jazz: false,
      acoustics: false

  },


  };

  componentDidMount() {

    API.getUser().then(res => {
      console.log("Select Artist Mounting Check", res.data, res.data.user.id);

      if (!res.data.user.id) {
        this.setState({ loggedIn: false });
      } 
      else {

        if (res.data.user.userType === "artist") {
          return <Redirect to={'/artist/'} />
        }
        else if (res.data.user.userType === "venue") {
          this.setState({
            loggedIn: true,
            userId: res.data.user.id,
            name: res.data.user.name,
            userType: res.data.user.userType,
            genres: JSON.parse(res.data.user.genres),
          });

        }
      }
    });


  };


  render() {

    return (
      <div>
        <HeaderBar />
          <SelectArtistArray /> 
      </div>
    )
  }

}

export default SelectArtist;