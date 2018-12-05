import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import HeaderBar from "../../components/HeaderBar"
import SelectArtistArray from "../../components/SelectArtist/Array/"
import Criterion from "../../components/SelectArtist/Criterion"

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import API from "../../utils/API";
import axios from "axios";


import "./selectartist.css"

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    transition: "0.3s ease-in-out",

  },
})

class SelectArtist extends Component {

  state = {
    loggedIn: true,
    userType: "",
    userId: 0,
    name: "",
    searchedGenre: "",
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

  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({ [name]: value });

  };


  handleKeyPress = event => {
    let searchedName = this.state.search;

    if (event.key == 'Enter') {
      console.log(this.state.search)
      API.getBandName(searchedName).then(res => {
        if (!res.data) {
          console.log("Artist profile does not exist!")
        } else {
          console.log(res.data)
          window.location.href = "/profile/" + res.data.id;
        }
      });

    }
  }


  render() {
    const { classes } = this.props;

    return (
      <div>
        <HeaderBar />
        <div>
          <TextField
            id="search-for-genres"
            placeholder="Search Artists"
            className={classes.textField}
            type="search"
            name="searchedGenre"
            autoComplete="search"
            margin="normal"
            variant="filled"
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       {/* <SearchIcon /> */}
            //     </InputAdornment>
            //   ),
            // }}
            onChange={this.handleInputChange}
            value={this.state.searchedGenre}
            onKeyPress={this.handleKeyPress}
          />
          <SelectArtistArray />
        </div>

      </div>
    )
  }

}

export default withStyles(styles)(SelectArtist);