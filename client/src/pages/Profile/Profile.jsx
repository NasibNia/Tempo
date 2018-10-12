import React, { Component } from 'react';
// import Header from "../../x/Header";
import HeaderBar from "../../components/HeaderBar"
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import API from "../../utils/API.js";
import axios from "axios";

import "./profile.css"


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "column"
    },
    paper: {
        marginTop: theme.spacing.unit * 10,
        margin: "auto",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        width: "1000px"
    },
    avatar: {
        // margin: "auto",
        marginTop: "10px",
        marginBottom: "10px",
        backgroundColor: theme.palette.secondary.main,
        width: 80,
        height: 80,
        transition: "0.3s ease",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }

    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    checks: {
        display: "flex",
        flexDirection: 'row',

    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});


class profile extends Component {

    state = {
        genres: {
            rap: true,
            pop: false,
            jazz: true
        },
        description: "",
        category: "",
        spotify: "",
        soundcloud: "",
        profilePic: "",
        loggedIn: false

    }

    //   componentDidMount() {}

    handleClick = event => {
        event.preventDefault();
        console.log("click")
        // const newBand = bands;
        this.postTheBand();

    }

    // postTheBand = () => {
    //     const newUser = {genre : this.state.genre, password : this.state.password}
    //     axios.post("/band/login" , newUser)
    //     .then(results => {
    //         this.state.loggedIn = true;
    //         console.log(results);
    //         window.location.href = "/artist";
    //     }

    //     );
    // };

    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleGenreChange = name => event => {
        let genres = Object.assign({}, this.state.genres);    //creating copy of object
        genres[name] = event.target.checked;                        //updating value
        this.setState({ genres });
    };



    // handleSubmitForm = event => {
    //     event.preventDefault();

    //     if (this.state.name && this.state.password) {
    //         const thisUser = {
    //             name: this.state.name,
    //             password: this.state.password
    //         };
    //         // check if user already exist in the database, 
    //         if (this.searchUser) {
    //             console.log("welcome back to the page")
    //         }
    //         //if not add it to the database
    //         else {
    //             this.addUser(thisUser);
    //         }
    //     }
    // }

    handleCheckboxClick = event => {

    }

    // sign in with google
    handleGoogleSignIn = event => {
    }

    //check bads, or venues to see if the name and password matches any record
    searchUser = (user) => {
        // axios.get("/api/bands")
        // .then(results =>{
        //     const isUserinBands = results.find({"username" : user.username});
        // });
        console.log("user exists");
        return true;
    };

    addUser = (user) => {
        console.log("add user")

    }



    render() {
        const { classes } = this.props;

        return (
            <div>
                <HeaderBar />
                <Paper className={classes.paper}>
                    <form className="container" noValidate autoComplete="off">
                        <div id = "profileHeader">
                            <Avatar className={classes.avatar} color="secondary" alt="Profile Picture" src={this.state.profilePic}>
                            </Avatar>
                            <div id = "profileInfo">
                                <h1 className="profile">Name: </h1>
                                <h1 className="profile">Rating: </h1>
                            </div>
                        </div>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">What Genres of Music Do You Perform? Select All that Apply!</FormLabel>
                            <FormGroup className={classes.checks}>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={this.state.genres.rap} onChange={this.handleGenreChange('rap')} value="rap" />
                                    }
                                    label="Rap"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={this.state.genres.pop} onChange={this.handleGenreChange('pop')} value="pop" />
                                    }
                                    label="Pop"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.genres.jazz}
                                            onChange={this.handleGenreChange('jazz')}
                                            value="jazz"
                                        />
                                    }
                                    label="Jazz"
                                />
                            </FormGroup>
                            <FormHelperText>Help us find the best gigs for you!</FormHelperText>
                        </FormControl>
                        <TextField
                            id="filled-description-input"
                            label="Write a description about yourself or your band!"
                            className={classes.textField}
                            type="description"
                            name="description"
                            autoComplete="current-description"
                            margin="normal"
                            // variant="filled"
                            onChange={this.handleInputChange}
                            value={this.state.description}
                        />
                        <TextField
                            id="filled-spotify-input"
                            label="Enter your Spotify Link"
                            className={classes.textField}
                            type="spotify"
                            name="spotify"
                            autoComplete="current-spotify"
                            margin="normal"
                            // variant="filled"
                            onChange={this.handleInputChange}
                            value={this.state.spotify}
                        />
                        <TextField
                            id="filled-soundcloud-input"
                            label="Enter your Soundcloud Link"
                            className={classes.textField}
                            type="soundcloud"
                            name="soundcloud"
                            autoComplete="current-soundcloud"
                            margin="normal"
                            // variant="filled"
                            onChange={this.handleInputChange}
                            value={this.state.soundcloud}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="secondary" />}
                            label="Remember me"
                        />
                        <Button variant="contained"
                            color="secondary"
                            onClick={this.handleClick}

                        >
                            {!this.state.loggedIn ? "Login" : <CheckIcon />}
                            {/* <Icon className="">+</Icon> */}
                        </Button>
                    </form>
                </Paper>
            </div>


        )
    }

}

export default withStyles(styles)(profile);