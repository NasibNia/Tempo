import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import HeaderBar from "../../components/HeaderBar";
import SelectArtistArray from "../../components/SelectArtist/Array/";

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';

import { withStyles } from '@material-ui/core/styles';

import API from "../../utils/API";
import axios from "axios";


import "./SelectArtist.css"

const styles = theme => ({
  formControl: {
    marginTop: theme.spacing.unit ,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit* 3,
    marginBottom: theme.spacing.unit* 3,
    minWidth: 120
  },
  paper: {
    borderTop: `7px solid ${theme.palette.secondary.main}`,
    marginTop: theme.spacing.unit * 10,
    margin: "auto",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    width: "80%"
  },
  button: {
    margin: theme.spacing.unit * 2,
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
    topArtists: "",
    checkedA: false,
    checkedB: false


  };

  componentDidMount() {

    API.getUser().then(res => {
      if (!res.data.user) {
        this.setState({ loggedIn: false });
        window.location.href = "/signin";
      }
      else {
        console.log("Select Artist Mounting Check", res.data, res.data.user.id);
        if (res.data.user.userType === "artist") {
          window.location.href = "/artist";
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

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
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

  handleClick = () => {
    this.setState({
      topArtists: <SelectArtistArray genre={this.state.searchedGenre} />
    })
  }


  render() {
    const { classes } = this.props;

    let artistArray = this.state.topArtists;

    return (
      <Paper className={classes.paper}>
        <HeaderBar />
        <div>
          <h1 id="select-artist-title">Create Your Personalized Line-Up</h1>
          <div className="select-artist-controls" >
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="filled-genre-simple">Genre</InputLabel>
              <Select
                value={this.state.searchedGenre}
                onChange={this.handleInputChange}
                input={<Input name="searchedGenre" id="filled-genre-simple" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"rock"}>Rock</MenuItem>
                <MenuItem value={"hiphop"}>Hip-Hop</MenuItem>
                <MenuItem value={"pop"}>Pop </MenuItem>
                <MenuItem value={"club"}>Club</MenuItem>
                <MenuItem value={"electric"}>Electric </MenuItem>
                <MenuItem value={"jazz"}>Jazz </MenuItem>
                <MenuItem value={"acoustic"}>Acoustic </MenuItem>
              </Select>
            </FormControl>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.checkedA}
                    onChange={this.handleChange('checkedA')}
                    value="checkedA"
                  />
                }
                label="Top Ticket Sales"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.checkedB}
                    onChange={this.handleChange('checkedB')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Top Average Attendance"
              />
            </FormGroup>
            <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleClick}>
              Search Top Artists!
      </Button>
          </div>
          <hr></hr>
          {artistArray}
        </div>

      </Paper>
    )
  }

}

export default withStyles(styles)(SelectArtist);