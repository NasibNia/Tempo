import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// import Header from "../../x/Header";
import HeaderBar from "../../components/HeaderBar"
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
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
import Fade from 'react-reveal/Fade';

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
        width: "600px"
    },
    avatar: {
        // margin: "auto",
        marginTop: "10px",
        marginBottom: "10px",
        backgroundColor: "transparent",
        border: `4px groove ${theme.palette.secondary.main}`,
        width: 100,
        height: 100,
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
        userId: 0,
        name: "",
        rating: 0.0,
        description: "",
        category: "",
        spotify: "",
        soundcloud: "",
        profilePic: "",
        facebook: "",
        readyToGig: false,
        Year_est: 0,
        ticket_price: 15,
        average_draw: 0,
        capacity: 0,
        loggedIn: false,
        finishedUpdate: false,
        activeStep: 1,
        loading: false,
        redirect: false,
        skipped: new Set(),
        userType: ""

    }

    componentDidMount() {
        API.getUser().then(res => {
            console.log("Profile Editor Mounting Check", res.data, res.data.user.id);
            if (!res.data.user.id) {
                this.setState({ loggedIn: false });
            } else {

                if (res.data.user.userType === "artist") {
                    if (res.data.user.description) {
                        this.setState({
                            loggedIn: true,
                            userId: res.data.user.id,
                            name: res.data.user.name,
                            userType: res.data.user.userType,
                            description: res.data.user.description,
                            soundcloud: res.data.user.soundcloud,
                            spotify: res.data.user.spotify,
                            facebook: res.data.user.facebook,
                            ticket_price: res.data.user.ticket_price,
                            average_draw: res.data.user.average_draw,
                            profilePic: res.data.user.profilePic,
                            genres: JSON.parse(res.data.user.genres),
                            readyToGig: res.data.user.readyToGig
                        });
                    }
                    else {
                        this.setState({
                            loggedIn: true,
                            userId: res.data.user.id,
                            name: res.data.user.name,
                            userType: res.data.user.userType,
                        });
                    }

                }
                else if (res.data.user.userType === "venue") {
                    if (res.data.user.description) {

                        this.setState({
                            loggedIn: true,
                            userId: res.data.user.id,
                            name: res.data.user.name,
                            userType: res.data.user.userType,
                            description: res.data.user.description,
                            capacity: res.data.user.capacity,
                            ticket_price: res.data.user.ticket_price,
                            Year_est: res.data.user.Year_est,
                            genres: JSON.parse(res.data.user.genres),
                            readyToBook: res.data.user.readyToGig
                        });
                    }
                    else {
                        this.setState({
                            loggedIn: true,
                            userId: res.data.user.id,
                            name: res.data.user.name,
                            userType: res.data.user.userType,
                        });
                    }
                }
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
                console.log("user type", this.state.userType)
                this.updateProfile();
            }, 2000);
        })
        // const newBand = bands;
        // this.updateProfile();

    }

    updateProfile = () => {
        console.log(this.state.userId, "State user id")
        if (this.state.userType === "artist") {
            console.log("artist is here")
            const profileInfo = {
                description: this.state.description,
                soundcloud: this.state.soundcloud,
                spotify: this.state.spotify,
                facebook: this.state.facebook,
                ticket_price: this.state.ticket_price,
                average_draw: this.state.average_draw,
                profilePic: this.state.profilePic,
                genres: JSON.stringify(this.state.genres),
                readyToGig: this.state.readyToGig,
                rock: this.state.genres.rock,
                club: this.state.genres.club,
                electronic: this.state.genres.electronic,
                hiphop: this.state.genres.hiphop,
                pop: this.state.genres.pop,
                jazz: this.state.genres.jazz,
                acoustics: this.state.genres.acoustics

            }

            API.updateBand(this.state.userId, profileInfo)
                .then(results => {
                    console.log(results);
                    if (results.status === 200) {
                        this.setState({
                            finishedUpdate: true
                        }, () => console.log(this.state))
                    }
                    else {
                        alert("Error in updating your information!")
                    }
                    // window.location.href = "/artist";
                }

                );
        }
        else if (this.state.userType === "venue") {
            const profileInfo = {
                description: this.state.description,
                capacity: this.state.capacity,
                ticket_price: this.state.ticket_price,
                Year_est: this.state.Year_est,
                genres: JSON.stringify(this.state.genres),
                readyToBook: this.state.readyToGig
            }

            API.updateVenue(this.state.userId, profileInfo)
                .then(results => {
                    console.log(results);
                    if (results.status === 200) {
                        this.setState({
                            finishedUpdate: true
                        }, () => console.log(this.state))
                    }
                    else {
                        alert("Error in updating your information!")
                    }
                    // window.location.href = "/artist";
                }

                );
        }

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

    handleReadyChange = event => {
        this.setState({ [event.target.value]: event.target.checked });
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
        let profilePrompts;

        //separated setTimout from the return Redirect since the render() method needs to directly return the Redirect route. It cannot be done within a function - Sajeel
        if (this.state.finishedUpdate) {
            setTimeout(() => { this.setState({ redirect: true }) }, 1000)
        }

        if (this.state.redirect) {
            if (this.state.userType === "artist") {
                return <Redirect to={'/artist/'} />
            } else if (this.state.userType === "venue") {
                return <Redirect to={'/venue/'} />
            }

        }

        if (this.state.userType === "artist") {
            profilePrompts = (
                <Fade>
                    <Paper className={classes.paper}>
                        <form className="container" noValidate autoComplete="off">
                            <div id="profileHeader">
                                <Avatar className={classes.avatar} alt="Profile Picture" src={this.state.profilePic}>
                                    <i className={classNames(classes.icon, "fas fa-user")}></i>
                                </Avatar>
                                <div className="profileInfo">
                                    <h1 className="profileName">{(this.state.name) ? this.state.name : "Name"}</h1>
                                    <h1 className="profile">Rating: {this.state.rating} </h1>
                                </div>
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
                                id="filled-profilePic-input"
                                label="Enter a link to a picture of you!"
                                className={classes.textField}
                                type="url"
                                name="profilePic"
                                autoComplete="current-profilePic"
                                margin="normal"
                                // variant="filled"
                                onChange={this.handleInputChange}
                                value={this.state.profilePic}
                            />
                            <TextField
                                id="filled-spotify-input"
                                label="Enter your Spotify Link"
                                className={classes.textField}
                                type="url"
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
                                type="url"
                                name="soundcloud"
                                autoComplete="current-soundcloud"
                                margin="normal"
                                // variant="filled"
                                onChange={this.handleInputChange}
                                value={this.state.soundcloud}
                            />
                            <TextField
                                id="filled-facebook-input"
                                label="Enter the link to your Facebook page"
                                className={classes.textField}
                                type="url"
                                name="facebook"
                                autoComplete="current-facebook"
                                margin="normal"
                                // variant="filled"
                                onChange={this.handleInputChange}
                                value={this.state.facebook}
                            />
                            <FormControl className={classes.textField} style={{ marginTop: "10px" }}>
                                <InputLabel htmlFor="filled-ticket_price-input">Current Ticket Price to Your Average Show</InputLabel>
                                <Input
                                    id="filled-ticket_price-input"
                                    name="ticket_price"
                                    type="number"
                                    value={this.state.ticket_price}
                                    autoComplete="current-ticket_price"
                                    onChange={this.handleInputChange}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                            <TextField
                                id="filled-average_draw-input"
                                label="What is the Average Draw (# of attendees) of your shows?"
                                className={classes.textField}
                                type="url"
                                name="average_draw"
                                autoComplete="current-average_draw"
                                margin="normal"
                                // variant="filled"
                                onChange={this.handleInputChange}
                                value={this.state.average_draw}
                            />
                            <FormControlLabel
                                control={<Checkbox value="readyToGig" onChange={this.handleReadyChange} checked={this.state.readyToGig} color="secondary" />}
                                label="Are you ready to book performances?"
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
                </Fade>
            )
        }
        else if (this.state.userType === "venue") {
            profilePrompts = (
                <Fade>
                    <Paper className={classes.paper}>
                        <form className="container" noValidate autoComplete="off">
                            <div id="profileHeader">
                                <Avatar className={classes.avatar} alt="Profile Picture" src={this.state.profilePic}>
                                    <i className={classNames(classes.icon, "fas fa-warehouse")}></i>
                                </Avatar>
                                <div className="profileInfo">
                                    <h1 className="profileName">{(this.state.name) ? this.state.name : "Name"}</h1>
                                    <h1 className="profile">Rating: {this.state.rating} </h1>
                                </div>
                            </div>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">What Genres of Music Do You Want to See at your Venue? Select All that Apply!</FormLabel>
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
                                <FormHelperText style={{ textAlign: "center" }}>Help us find the best artists and bands for you!</FormHelperText>
                            </FormControl>
                            <TextField
                                id="filled-description-input"
                                label="Write a description about your venue! Mention your history, themes, and purpose!"
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
                            {/* <TextField
                        id="filled-profilePic-input"
                        label="Enter a link to a picture of your venue!"
                        className={classes.textField}
                        type="url"
                        name="profilePic"
                        autoComplete="current-profilePic"
                        margin="normal"
                        // variant="filled"
                        onChange={this.handleInputChange}
                        value={this.state.profilePic}
                    /> */}
                            {/* <TextField
                            id="filled-ticket_price-input"
                            label="Enter the typical price of entry to your venue"
                            className={classes.textField}
                            type="number"
                            name="ticket_price"
                            autoComplete="current-ticket_price"
                            margin="normal"
                            // variant="filled"
                            onChange={this.handleInputChange}
                            value={this.state.ticket_price}
                        /> */}
                            <FormControl className={classes.textField} style={{ marginTop: "10px" }}>
                                <InputLabel htmlFor="filled-ticket_price-input">Enter the typical price of entry to your venue</InputLabel>
                                <Input
                                    id="filled-ticket_price-input"
                                    name="ticket_price"
                                    type="number"
                                    value={this.state.ticket_price}
                                    autoComplete="current-ticket_price"
                                    onChange={this.handleInputChange}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                            <TextField
                                id="filled-capacity-input"
                                label="What is your max capacity?"
                                className={classes.textField}
                                type="number"
                                name="capacity"
                                autoComplete="current-capacity"
                                margin="normal"
                                // variant="filled"
                                onChange={this.handleInputChange}
                                value={this.state.capacity}
                            />
                            <TextField
                                id="date"
                                label="what year were you established?"
                                type="date"
                                // defaultValue="2018-01-01"
                                name="Year_est"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={this.handleInputChange}
                                value={this.state.Year_est}

                            />
                            <FormControlLabel
                                control={<Checkbox value="readyToGig" onChange={this.handleReadyChange} checked={this.state.readyToGig} color="secondary" />}
                                label="Are you ready to book performances?"
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
                </Fade>
            )
        }




        return (
            <div>
                <HeaderBar />
                {profilePrompts}
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