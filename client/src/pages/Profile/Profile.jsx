import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
import Icon from '@material-ui/core/Icon';
import LockIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';


// Stepper
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

// Transitions
import Grow from '@material-ui/core/Grow';

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
        borderTop: `7px solid ${theme.palette.secondary.main}`,
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
        backgroundColor: "transparent",
        border: `4px groove ${theme.palette.secondary.main}`,
        width: 80,
        height: 80,
        transition: "0.3s ease",
        '&:hover': {
            border: `4px groove ${theme.palette.secondary.light}`,
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
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    formControl: {
        margin: "10px auto",
        textAlign: "center"
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
    stepper: {
        marginTop: theme.spacing.unit * 10,
        marginBottom: theme.spacing.unit,
        margin: "auto",
        width: "80%"
    },
    buttonSuccess: {
        backgroundColor: "#4CAF50",
        '&:hover': {
            backgroundColor: "rgb(58, 129, 61)",
        },
    },
    buttonProgress: {
        color: "#4CAF50",
        position: 'relative',
        bottom: '20px',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
});

function getSteps() {
    return ['Sign up as a Tempo Affiliate', 'Set Up your Personal Profile', 'Get ready to book!'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Sign up as a Tempo Affiliate...';
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown step';
    }
}



class profile extends Component {

    state = {
        genres: {
            rock: false,
            club: false,
            electronic: false,
            hiphop: false,
            pop: false,
            jazz: false,
            acoustics: false

        },
        name: "",
        rating: 0.0,
        description: "",
        category: "",
        spotify: "",
        soundcloud: "",
        profilePic: "",
        loggedIn: false,
        finishedUpdate: false,
        activeStep: 1,
        loading: false,
        redirect: false,
        skipped: new Set()

    }

    //   componentDidMount() {}

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
                    loggedIn: true,
                    finishedUpdate: true,
                });
                //updates the user information
                // this.updateProfile();
            }, 2000);
        })
        // const newBand = bands;
        // this.updateProfile();

    }

    updateProfile = () => {
        const newUser = {
            description: this.state.desription,
            soundcloud: this.state.soundcloud,
            spotify: this.state.spotify,
            profilePic: this.state.profilePic,
            genres: JSON.stringify(this.state.genres)
        }
        //change this to API.updateBand
        axios.post("/band/signup", newUser)
            .then(results => {
                console.log(results);
                if (results.data.success) {
                    this.setState({
                        loggedIn: true,
                        finishedUpdate: true,
                    }, () => console.log(this.state))
                }
                if (!results.data.success) {
                    alert("incorrect username or password")
                }
                // window.location.href = "/artist";
            }

            );
    };

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

    isStepOptional = step => {
        return step === 1;
    };

    handleNext = () => {
        const { activeStep } = this.state;
        let { skipped } = this.state;
        if (this.isStepSkipped(activeStep)) {
            skipped = new Set(skipped.values());
            skipped.delete(activeStep);
        }
        this.setState({
            activeStep: activeStep + 1,
            skipped,
        });
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleSkip = () => {
        const { activeStep } = this.state;
        if (!this.isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        this.setState(state => {
            const skipped = new Set(state.skipped.values());
            skipped.add(activeStep);
            return {
                activeStep: state.activeStep + 1,
                skipped,
            };
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    isStepSkipped(step) {
        return this.state.skipped.has(step);
    }



    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        //separated setTimout from the return Redirect since the render() method needs to directly return the Redirect route. It cannot be done within a function - Sajeel
        if (this.state.finishedUpdate) {
            setTimeout(() => { this.setState({ redirect: true }) }, 1000)
        }

        if (this.state.redirect)
            return <Redirect to={'/artist/'}/>
       

        return (
            <div>
                <HeaderBar />
                <Grow in={true}>

                    <Paper className={classes.paper}>
                        <form className="container" noValidate autoComplete="off">
                            <div id="profileHeader">
                                <Avatar className={classes.avatar} alt="Profile Picture" src={this.state.profilePic}>
                                    <i className={classNames(classes.icon, "fas fa-user")}></i>
                                </Avatar>
                                <div class="profileInfo">
                                    <h1 className="profile">{(this.state.name) ? this.state.name : "Name"}</h1>
                                    <h1 className="profile">Rating: {this.state.rating} </h1>
                                </div>
                                {/* <div class="profileInfo">
                                <iframe allowtransparency="true" scrolling="no" frameborder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fundefined&color=orange_white&size=32" style="width: 32px; height: 32px;"></iframe>
                                <iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div> */}
                            </div>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">What Genres of Music Do You Perform? Select All that Apply!</FormLabel>
                                <FormGroup className={classes.checks}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={this.state.genres.rock} onChange={this.handleGenreChange('rock')} value="rock" />
                                        }
                                        label="Rock"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={this.state.genres.hiphop} onChange={this.handleGenreChange('hiphop')} value="hiphop" />
                                        }
                                        label="Hip-Hop"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={this.state.genres.pop} onChange={this.handleGenreChange('pop')} value="pop" />
                                        }
                                        label="Pop"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={this.state.genres.electronic} onChange={this.handleGenreChange('electronic')} value="electronic" />
                                        }
                                        label="Electronic"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={this.state.genres.club} onChange={this.handleGenreChange('club')} value="club" />
                                        }
                                        label="Club"
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
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.genres.acoustics}
                                                onChange={this.handleGenreChange('acoustics')}
                                                value="acoustics"
                                            />
                                        }
                                        label="Acoustics"
                                    />
                                </FormGroup>
                                <FormHelperText style={{ textAlign: "center" }}>Help us find the best gigs for you!</FormHelperText>
                            </FormControl>
                            <TextField
                                id="filled-description-input"
                                label="Write a description about yourself or your band!"
                                className={classes.textField}
                                type="description"
                                name="description"
                                autoComplete="current-description"
                                margin="normal"
                                multiline={true}
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
                                className={this.state.finishedUpdate ? classes.buttonSuccess : ""}
                                onClick={this.handleClick}

                            >
                                {!this.state.finishedUpdate ? "Submit and Update" : <CheckIcon />}
                                {/* <Icon className="">+</Icon> */}
                            </Button>
                            {this.state.loading && <CircularProgress size={30} className={classes.buttonProgress} />}
                        </form>
                    </Paper>
                </Grow>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label, index) => {
                        const props = {};
                        const labelProps = {};
                        if (this.isStepOptional(index)) {
                            labelProps.optional = <Typography variant="caption">Show us what you got!</Typography>;
                        }
                        if (this.isStepSkipped(index)) {
                            props.completed = false;
                        }
                        return (
                            <Step key={label} {...props}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </div>


        )
    }

}

export default withStyles(styles)(profile);