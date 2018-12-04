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
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Grow from '@material-ui/core/Grow';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import API from "../../utils/API.js";
import axios from "axios";

import { validations } from './validations';
import "./signup.css"

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "column"
    },
    paper: {
        borderTop: `7px solid ${theme.palette.secondary.main}`,
        marginTop: theme.spacing.unit * 10,
        marginBottom: theme.spacing.unit * 6,
        margin: "auto",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        width: "400px",
        height: "auto"
    },
    avatar: {
        margin: "auto",
        backgroundColor: theme.palette.secondary.dark
        // border: `2px inset ${theme.palette.secondary.dark}`
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2
    },
    formControl: {
        marginTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        minWidth: 120
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
    link: {
        textAlign: "center",
        transition: "0.2s ease-in-out",
        '&:hover': {
            textDecoration: "underline",
            letterSpacing: "1px",
            color: theme.palette.secondary.dark

        }

    }
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


class SignUp extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        passwordRepeat: "",
        genre: "",
        category: "",
        userType: "",
        address: "",
        zip: "",
        city: "",
        stateUS: "",
        showsPlayed: 0,
        showsCancelled: 0,
        showsLate: 0,
        venueRating: 0,
        lookingForVenue: [],
        loggedIn: false,
        open: false,
        finishedSignup: false,
        loading: false,
        redirect: false,
        activeStep: 0,
        skipped: new Set(),
        errors: {
            name: "",
            email: "",
            password: "",
            passwordRepeat: ""
        }

    }

    //   componentDidMount() {}

    handleClick = event => {
        event.preventDefault();
        console.log("click")

        console.log ("user type is ", this.state.userType);

        console.log("client errors", this.state.errors)
        console.log("should we pass?", !(this.state.errors.name || this.state.errors.email && this.state.errors.password))
        if (!(this.state.errors.name && this.state.errors.email && this.state.errors.password)) {
            this.setState(
                {
                    loading: true
                },
                () => {
                    this.timer = setTimeout(() => {
                        this.setState({
                            loading: false,
                        });
                        //logs in the user after a successful load
                        if (this.state.userType === "artist"){
                            this.signUpBand();
                        } else if (this.state.userType === "venue"){
                            this.signUpVenue();  
                        }             
                    }, 2000);
                },
            )
        }


    }

    signUpBand = () => {
        let newArtist = {
            userType: this.state.userType,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            // genre: this.state.genre
        }
        console.log("Artist Profile", newArtist);
        axios.post("/band/signup", newArtist)
            .then(results => {
                console.log(results);
                if (results.data.success) {
                    this.setState({
                        loggedIn: true,
                        finishedSignup: true,
                    }, () => console.log(this.state))
                }
                if (!results.data.success) {
                    alert("incorrect username or password")
                }
                // window.location.href = "/artist";
            }

            );
    };

    signUpVenue = () => {
        let newVenue = {
            userType: this.state.userType,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
            zip: this.state.zip,
            city: this.state.city,
            state: this.state.stateUS
            // genre: this.state.genre
        }
        console.log("Venue Profile", newVenue);
        axios.post("/venue/signup", newVenue)
            .then(results => {
                console.log(results);
                if (results.data.success) {
                    this.setState({
                        loggedIn: true,
                        finishedSignup: true,
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

        let errors = validations(
            {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                passwordRepeat: this.state.passwordRepeat
            }
        );

        this.setState({ errors });

    };

    handleSubmitForm = event => {
        event.preventDefault();

        if (this.state.name && this.state.password) {
            const thisUser = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                genre: this.state.genre,
            };
            // check if user already exist in the database, 
            if (this.searchUser) {
                console.log("welcome back to the pstate")
            }
            //if not add it to the database
            else {
                this.addUser(thisUser);
            }
        }

    }

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleUserClick = event => {

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

        if (this.state.finishedSignup) {
            setTimeout(() => { this.setState({ redirect: true }) }, 1000)
        }

        if (this.state.redirect) {
            // let profileRoute = '/profile/' + this.state.id;
            return <Redirect to={'/profile/'} />
            // return <Redirect to={{profileRoute, state: {userType: this.state.userType}}} />
        }

        // return <Redirect to='/artist' />

        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
        let formQuestions;

        if (this.state.userType === "artist") {
            formQuestions = (
                <Grow in={true} mountOnEnter unmountOnExit>
                    <div id="userTypeForm">
                        <TextField
                            id="filled-Name-input"
                            label="Name"
                            className={classes.textField}
                            type="name"
                            name="name"
                            autoComplete="name"
                            margin="normal"
                            variant="filled"
                            onChange={this.handleInputChange}
                            value={this.state.name}
                            helperText={this.state.errors.name}
                            error={this.state.errors.name ? true : false}
                        />
                        <TextField
                            id="filled-email-input"
                            label="Email"
                            className={classes.textField}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="filled"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                            helperText={this.state.errors.email}
                            error={this.state.errors.email ? true : false}
                        />
                        <TextField
                            id="filled-password-input"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="filled"
                            onChange={this.handleInputChange}
                            value={this.state.password}
                            helperText={this.state.errors.password}
                            error={this.state.errors.password ? true : false}
                        />
                        <TextField
                            id="filled-passwordRepeat-input"
                            label="Enter your password again"
                            className={classes.textField}
                            type="password"
                            name="passwordRepeat"
                            autoComplete="current-passwordRepeat"
                            margin="normal"
                            variant="filled"
                            onChange={this.handleInputChange}
                            value={this.state.passwordRepeat}
                            helperText={this.state.errors.passwordRepeat}
                            error={this.state.errors.passwordRepeat ? true : false}
                        />
                    </div>
                </Grow>
            )

        }
        else if (this.state.userType === "venue") {
            formQuestions = (
                <Grow in={true} mountOnEnter unmountOnExit>
                    <div id="userTypeForm">
                        <TextField
                            id="filled-name-input"
                            label="Venue Name"
                            className={classes.textField}
                            type="name"
                            name="name"
                            autoComplete="name"
                            margin="normal"
                            variant="filled"
                            onChange={this.handleInputChange}
                            value={this.state.name}
                            helperText={this.state.errors.name}
                            error={this.state.errors.name ? true : false}
                        />
                        <TextField
                            id="filled-email-input"
                            label="Email"
                            className={classes.textField}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="filled"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                            helperText={this.state.errors.email}
                            error={this.state.errors.email ? true : false}

                        />
                        <TextField
                            id="filled-password-input"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="filled"
                            onChange={this.handleInputChange}
                            value={this.state.password}
                            helperText={this.state.errors.password}
                            error={this.state.errors.password ? true : false}
                        />
                        <TextField
                            id="filled-passwordRepeat-input"
                            label="Enter your password again"
                            className={classes.textField}
                            type="password"
                            name="passwordRepeat"
                            autoComplete="current-passwordRepeat"
                            margin="normal"
                            variant="filled"
                            onChange={this.handleInputChange}
                            value={this.state.passwordRepeat}
                            helperText={this.state.errors.passwordRepeat}
                            error={this.state.errors.passwordRepeat ? true : false}
                        />
                        <TextField
                            id="filled-address-input"
                            label="Street Address"
                            className={classes.textField}
                            type="text"
                            name="address"
                            autoComplete="current-address"
                            margin="normal"
                            variant="filled"
                            onChange={this.handleInputChange}
                            value={this.state.address}
                        />
                        <div id="addressInputs">
                            <TextField
                                id="filled-city-input"
                                label="City"
                                className={classes.textField}
                                type="text"
                                name="city"
                                autoComplete="current-city"
                                margin="normal"
                                variant="filled"
                                onChange={this.handleInputChange}
                                value={this.state.city}
                            />
                            <FormControl variant="filled" className={classes.formControl}>
                                <InputLabel htmlFor="filled-state-simple">State</InputLabel>
                                <Select
                                    value={this.state.stateUS}
                                    onChange={this.handleInputChange}
                                    input={<FilledInput name="stateUS" id="filled-state-simple" />}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>

                                    <MenuItem value={"AL"}>Alabama</MenuItem>
                                    <MenuItem value={"AK"}>Alaska</MenuItem>
                                    <MenuItem value={"AZ"}>Arizona </MenuItem>
                                    <MenuItem value={"AR"}>Arkansas </MenuItem>
                                    <MenuItem value={"CA"}>California </MenuItem>
                                    <MenuItem value={"Co"}>Colorado </MenuItem>
                                    <MenuItem value={"CT"}>Connecticut </MenuItem>
                                    <MenuItem value={"DE"}>Delaware </MenuItem>
                                    <MenuItem value={"FL"}>Florida </MenuItem>
                                    <MenuItem value={"GA"}>Georgia </MenuItem>
                                    <MenuItem value={"HI"}>Hawaii </MenuItem>
                                    <MenuItem value={"ID"}>Idaho </MenuItem>
                                    <MenuItem value={"IL"}>Illinois Indiana </MenuItem>
                                    <MenuItem value={"IN"}>Iowa </MenuItem>
                                    <MenuItem value={"IA"}>Kansas </MenuItem>
                                    <MenuItem value={"KS"}>Kentucky </MenuItem>
                                    <MenuItem value={"LA"}>Louisiana </MenuItem>
                                    <MenuItem value={"ME"}>Maine </MenuItem>
                                    <MenuItem value={"MD"}>Maryland</MenuItem>
                                    <MenuItem value={"MA"}>Massachusetts </MenuItem>
                                    <MenuItem value={"MI"}>Michigan </MenuItem>
                                    <MenuItem value={"MN"}>Minnesota </MenuItem>
                                    <MenuItem value={"MS"}>Mississippi </MenuItem>
                                    <MenuItem value={"MO"}>Missouri </MenuItem>
                                    <MenuItem value={"MT"}>Montana </MenuItem>
                                    <MenuItem value = {"NE"}>Nebraska </MenuItem>
                                    <MenuItem value={"NV"}>Nevada </MenuItem>
                                    <MenuItem value={"NH"}>New Hampshire </MenuItem>
                                    <MenuItem value={"NJ"}>New Jersey </MenuItem>
                                    <MenuItem value={"NM"}>New Mexico </MenuItem>
                                    <MenuItem value={"NY"}>New York </MenuItem>
                                    <MenuItem value={"NC"}>North Carolina </MenuItem>
                                    <MenuItem value={"ND"}>North Dakota </MenuItem>
                                    <MenuItem value={"OH"}>Ohio </MenuItem>
                                    <MenuItem value={"OK"}>Oklahoma </MenuItem>
                                    <MenuItem value={"OR"}>Oregon </MenuItem>
                                    <MenuItem value={"PA"}>Pennsylvania Rhode Island</MenuItem>
                                    <MenuItem value={"SC"}>South Carolina </MenuItem>
                                    <MenuItem value={"SD"}>South Dakota </MenuItem>
                                    <MenuItem value={"TN"}>Tennessee </MenuItem>
                                    <MenuItem value={"TX"}>Texas </MenuItem>
                                    <MenuItem value={'UT'}>Utah </MenuItem>
                                    <MenuItem value={"VT"}>Vermont </MenuItem>
                                    <MenuItem value={"VA"}>Virginia </MenuItem>
                                    <MenuItem value={"WA"}>Washington </MenuItem>
                                    <MenuItem value={"WV"}>West Virginia </MenuItem>
                                    <MenuItem value={"WI"}>Wisconsin </MenuItem>
                                    <MenuItem value={"WY"}>Wyoming</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                id="filled-zip-input"
                                label="Zip Code"
                                className={classes.textField}
                                type="text"
                                name="zip"
                                autoComplete="current-zip"
                                margin="normal"
                                variant="filled"
                                onChange={this.handleInputChange}
                                value={this.state.zip}
                            />
                        </div>
                    </div>
                </Grow>
            )
        }
        else {
            formQuestions = (<h2 className={classes.button} style={{ textAlign: "center" }} >Choose an option!</h2>)
        }

        return (
            <div>
                <Paper className={classes.paper}>
                    <form className="container" noValidate autoComplete="off" style={{ marginTop: "5%" }}>
                        <Avatar className={classes.avatar} color="secondary">
                            <LockIcon />
                        </Avatar>
                        <h1 className="signup">Sign Up as a Tempo Affiliate!</h1>
                        {/* <form autoComplete="off" id="userTypeForm"> */}
                        <Button classNames={classes.button} onClick={this.handleOpen}>
                            Are you a band/artist or a venue?
                            </Button>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="demo-controlled-open-select">Band or Venue?</InputLabel>
                            <Select
                                open={this.state.open}
                                onClose={this.handleClose}
                                onOpen={this.handleOpen}
                                value={this.state.userType}
                                onChange={this.handleInputChange}
                                inputProps={{
                                    name: 'userType',
                                    id: 'demo-controlled-open-select',
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"artist"} >Artist or Band</MenuItem>
                                <MenuItem value={"venue"} >Venue</MenuItem>
                            </Select>
                        </FormControl>

                        {formQuestions}

                        <FormControlLabel
                            control={<Checkbox value="remember" color="secondary" />}
                            label="Remember me"
                        />
                        <Button variant="contained"
                            color="secondary"
                            className={this.state.loggedIn ? classes.buttonSuccess : ""}
                            onClick={this.handleClick}

                        >
                            {!this.state.loggedIn ? "Sign Up" : <CheckIcon />}
                            {/* <Icon className="">+</Icon> */}
                        </Button>
                        {this.state.loading && <CircularProgress size={30} className={classes.buttonProgress} />}
                    </form>
                </Paper>
                <Typography style={{ textAlign: "center" }}>
                    <a className={classes.link} href="/signin">Already a user? Sign in</a>
                </Typography>
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

export default withStyles(styles)(SignUp);
