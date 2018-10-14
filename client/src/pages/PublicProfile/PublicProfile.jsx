import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// import Header from "../../x/Header";
import HeaderBar from "../../components/HeaderBar"
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

// Transitions

import API from "../../utils/API.js";
import axios from "axios";

import spotifyImage from "./spotify-button.png";
import soundcloudImage from "./soundcloudsvg.svg";
import "./publicProfile.css"


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "column"
    },
    paper: {
        borderTop: `7px solid ${theme.palette.secondary.main}`,
        marginTop: theme.spacing.unit * 10,
        margin: "auto",
        display: 'flex',
        flexDirection: 'column',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        width: "1000px"
    },
    avatar: {
        // margin: "auto",
        marginTop: "10px",
        marginBottom: "10px",
        backgroundColor: "transparent",
        // border: `4px groove ${theme.palette.secondary.main}`,
        width: 200,
        height: 200,
        transition: "0.3s ease",
        '&:hover': {
            border: `2px groove ${theme.palette.secondary.light}`,
        }

    },
    icon: {
        fontSize: "2em",
        color: theme.palette.secondary.main,
        transition: "0.3s ease",
        '&:hover': {
            color: theme.palette.secondary.light
            // color: `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`
        }
    },
    button: {
        margin: theme.spacing.unit,
      },
    spotify: {
        margin: theme.spacing.unit,
        // backgroundColor: "gray",
        // backgroundImage: `url(${spotifyImage})`,
        // backgruondSize: "100px 100px"
      }
});

class PublicProfile extends Component {

    state = {
        userId: 0,
        name: "",
        rating: 0.0,
        description: "",
        category: "",
        spotify: "",
        soundcloud: "",
        profilePic: "",
        loggedIn: false

    }

    componentDidMount() {
        API.getUser().then(res => {
            console.log("Public Profile Mounting Check", res.data, res.data.user.id);
            if (!res.data.user.id) {
                this.setState({ loggedIn: false });
            } else {
                this.setState({
                    loggedIn: true,
                    userId: res.data.user.id,
                    name: res.data.user.name,
                    description: res.data.user.description,
                    profilePic: res.data.user.profilePic,
                    spotify: res.data.user.spotify,
                    soundcloud: res.data.user.soundcloud
                });
            }
        });

    }

    handleClick = event => {
        event.preventDefault();
        console.log("click");
        this.setState({
            loading: true,

        }, () => {
            this.timer = setTimeout(() => {
                this.setState({
                    loading: false,
                    // temporary testing for progress bar
                    // loggedIn: true,
                    // finishedUpdate: true,
                });
                //updates the user information
                this.updateProfile();
            }, 2000);
        })
        // const newBand = bands;
        // this.updateProfile();

    }


    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <HeaderBar />
                <Paper className={classes.paper}>
                    <div id="profileHeader">
                        <Avatar className={classes.avatar} alt="Profile Picture" src={this.state.profilePic}>
                            <i className={classNames(classes.icon, "fas fa-user")}></i>
                        </Avatar>
                        <div className="profileInfo">
                            <Button variant="extendedFab" aria-label="button" className={classes.spotify}>
                                Spotify
                            </Button>
                            <Button variant="extendedFab" aria-label="button" className={classes.button}>
                                
                                Soundcloud
                            </Button>
                        </div>

                    </div>
                    <h1 className="profileName">{(this.state.name) ? this.state.name : "Name"}</h1>
                    <h1 className="profile">Rating: {this.state.rating} </h1>
                    <p className="profileContent"> Description: <span className = "info">{this.state.description}</span></p>
                    <p className="profileContent"></p>
                    <p className="profileContent"></p>
                </Paper>
            </div >


        )
    }

}

export default withStyles(styles)(PublicProfile);