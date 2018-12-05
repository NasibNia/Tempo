import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import HeaderBar from "../../components/HeaderBar"
import SelectArtistArray from "../../components/SelectArtist/Array/"
import Criterion from "../../components/SelectArtist/Criterion"

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
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
  paper: {
    borderTop: `7px solid ${theme.palette.secondary.main}`,
    marginTop: theme.spacing.unit * 10,
    margin: "auto",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    width: "90%"
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
    topArtists: ""


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

    if (event.key == 'Enter') {
      console.log(this.state.searchedGenre)

      // return <SelectArtistArray genre={this.state.searchedGenre} />

      this.setState({ 
        topArtists: <SelectArtistArray genre={this.state.searchedGenre} />
      })

    }
  }


  render() {
    const { classes } = this.props;
    
    let artistArray = this.state.topArtists;

    return (
      <Paper className={classes.paper}>
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
          <hr></hr>
          {artistArray}
        </div>

      </Paper>
    )
  }

}

export default withStyles(styles)(SelectArtist);