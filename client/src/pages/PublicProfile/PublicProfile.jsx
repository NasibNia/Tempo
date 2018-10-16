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

import Navigate from '../../components/Body/Navigate'
import Main from '../../components/Body/Main'

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
        // '&:hover': {
        //     textShadow: "1px 1px black",
        // }

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
    soundcloud: {
        margin: theme.spacing.unit,
        backgroundColor: "#F75D00",
        // backgroundColor: "linear-gradient(to right, #F74102, #F75D00)",
        color: "white",
        // backgroundImage: `url(${spotifyImage})`,
        // backgruondSize: "100px 100px",
        transition: "0.3s ease",
        '&:hover': {
            backgroundColor: "rgb(252, 132, 58)"
        }
    },

    spotify: {
        margin: theme.spacing.unit,
        backgroundColor: "#131313",
        color: "#1ED760",
        // backgroundImage: `url(${spotifyImage})`,
        // backgruondSize: "100px 100px",
        transition: "0.3s ease",
        '&:hover': {
            backgroundColor: "#212220e7"
        }
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
            if (!res.data.user) {
                this.setState({ loggedIn: false });
                window.location.href = "/signin";
            } else {
                console.log("Public Profile Mounting Check", res.data, res.data.user.id);
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

    // handleClick = event => {
    //     event.preventDefault();
    //     console.log("click");
    //     this.setState({
    //         loading: true,

    //     }, () => {
    //         this.timer = setTimeout(() => {
    //             this.setState({
    //                 loading: false,
    //                 // temporary testing for progress bar
    //                 // loggedIn: true,
    //                 // finishedUpdate: true,
    //             });
    //             //updates the user information
    //             this.updateProfile();
    //         }, 2000);
    //     })
    //     // const newBand = bands;
    //     // this.updateProfile();

    // }


    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <HeaderBar />
                <HeaderBar userType={this.state.userType} />
                <div className="body-wrap">
                    <Navigate method={this.changeState} userType={this.state.userType} />
                    <div className="profile-wrap">
                        <div className="profile-main">
                            <div className="profile-info">
                                <div className="profile-photo"></div>
                                <div className="profile-bio">
                                    <h1 className="profile-name">Tame Impala</h1>
                                    <h3 className="profile-hometown">Hometown: San Francisco</h3>
                                    <h3 className="profile-date-formed">Date formed: 4/20/18</h3>
                                    <h3 className="profile-genre">Genre: Rock</h3>
                                    <h3 className="profile-member-count">Member Count: 4</h3>
                                    <p className="profile-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu erat a ipsum vehicula volutpat. Nullam at dui imperdiet, feugiat ex sed, pharetra elit. Maecenas vitae tristique dolor.</p>
                                </div>
                            </div>

                            <div
                                className="profile-activity">
                                    <h3 className="profile-activity-header">Activity</h3>
                                    <div className="activity-box">
                                        <div className="activity-item">
                                            <div className="activity-icon"></div>
                                            <div className="activity-text">
                                            <h3>Activity Headline</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                        <div className="activity-item">
                                            <div className="activity-icon"></div>
                                            <div className="activity-text">
                                            <h3>Activity Headline</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                        <div className="activity-item">
                                            <div className="activity-icon"></div>
                                            <div className="activity-text">
                                            <h3>Activity Headline</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                        <div className="activity-item">
                                            <div className="activity-icon"></div>
                                            <div className="activity-text">
                                            <h3>Activity Headline</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="profile-music"></div>
                        </div>
                        <div className="profile-stats">
                            <div className="active-status">
                                <h1 className="active">ACTIVE</h1>
                            </div>
                            <div className="tempo-rating">
                                <div className="rating-box">
                                    <h1 className="rating-number">4.3</h1>
                                    <h3 className="rating-subtitle">Tempo Rating</h3>
                                </div>
                                <div className="rating-box">
                                    <h1 className="rating-number">1400+</h1>
                                    <h3 className="rating-subtitle">Facebook Likes</h3>
                                </div>
                                <div className="rating-box">
                                    <h1 className="rating-number">$15</h1>
                                    <h3 className="rating-subtitle">Average Ticket Price</h3>
                                </div>
                                <div className="rating-box">
                                    <h1 className="rating-number">215</h1>
                                    <h3 className="rating-subtitle">Average Draw</h3>
                                </div>
                                <div className="rating-box">
                                    <h1 className="rating-number">222</h1>
                                    <h3 className="rating-subtitle">Shows Played</h3>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>


                {/* <Paper className={classes.paper}>
                    <div id="profileHeader">
                        <Avatar className={classes.avatar} alt="Profile Picture" src={this.state.profilePic}>
                            <i className={classNames(classes.icon, "fas fa-user")}></i>
                        </Avatar>
                        <div className="profileInfo">
                            <Button variant="extendedFab" aria-label="button" className={classes.spotify}>
                                Spotify
                            </Button>
                            <Button variant="extendedFab" aria-label="button" className={classes.soundcloud}>
                                Soundcloud
                            </Button>
                        </div>

                    </div>
                    <h1 className="profileName">{(this.state.name) ? this.state.name : "Name"}</h1>
                    <h1 className="profile">Rating: {this.state.rating} </h1>
                    <p className="profileContent">Description: <span className="info">{this.state.description}</span></p>
                    <p className="profileContent"></p>
                    <p className="profileContent"></p>
                </Paper> */}
            </div >


        )
    }

}

export default withStyles(styles)(PublicProfile);