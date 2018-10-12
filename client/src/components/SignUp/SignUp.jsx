import React, { Component } from 'react';
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
import API from "../../utils/API.js";
import axios from "axios";



import "./signup.css"

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
        width: "400px",
        height: "auto"
    },
    avatar: {
        margin: "auto",
        backgroundColor: theme.palette.secondary.dark,
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
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        marginTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        minWidth: 120
    }
});


class SignUp extends Component {

    state = {
        email: "",
        password: "",
        category: "",
        userType: "",
        address: "",
        zip: "",
        city: "",
        stateUS: "",
        loggedIn: false,
        open: false,

    }

    //   componentDidMount() {}

    handleClick = event => {
        event.preventDefault();
        console.log("click")
        // const newBand = bands;
        this.postTheBand();

    }

    postTheBand = () => {
        const newUser = { email: this.state.email, password: this.state.password }
        axios.post("/band/login", newUser)
            .then(results => {
                this.setState({ loggedIn: true });
                console.log(results);
                window.location.href = "/artist";
            }

            );
    };

    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmitForm = event => {
        event.preventDefault();

        if (this.state.name && this.state.password) {
            const thisUser = {
                name: this.state.name,
                password: this.state.password
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


    render() {
        const { classes } = this.props;
        let formQuestions;

        if (this.state.userType === "artist") {
            formQuestions = (
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
                        value={this.state.username}
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
                    />
                </div>
            )

        }
        else if (this.state.userType === "venue") {
            formQuestions = (
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
                        value={this.state.username}
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
                    />
                    <TextField
                        id="filled-address-input"
                        label="Street Address"
                        className={classes.textField}
                        type="address"
                        name="address"
                        autoComplete="current-address"
                        margin="normal"
                        variant="filled"
                        onChange={this.handleInputChange}
                        value={this.state.address}
                    />
                    <div id="addressInputs">
                        <TextField
                            id="filled-zip-input"
                            label="Zip Code"
                            className={classes.textField}
                            type="zip"
                            name="zip"
                            autoComplete="current-zip"
                            margin="normal"
                            variant="filled"
                            onChange={this.handleInputChange}
                            value={this.state.zip}
                        />
                        <TextField
                            id="filled-city-input"
                            label="City"
                            className={classes.textField}
                            type="city"
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
                                onChange={this.handleChange}
                                input={<FilledInput name="stateUS" id="filled-state-simple" />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>

                                <MenuItem value={30}>Alabama</MenuItem>
                                <MenuItem value={30}>Alaska</MenuItem>
                                <MenuItem value={30}>Arizona </MenuItem>
                                <MenuItem value={30}>Arkansas </MenuItem>
                                <MenuItem value={30}>California </MenuItem>
                                <MenuItem value={30}>Colorado </MenuItem>
                                <MenuItem value={30}>Connecticut </MenuItem>
                                <MenuItem value={30}>Delaware </MenuItem>
                                <MenuItem value={30}>Florida </MenuItem>
                                <MenuItem value={30}>Georgia </MenuItem>
                                <MenuItem value={30}>Hawaii </MenuItem>
                                <MenuItem value={30}>Idaho </MenuItem>
                                <MenuItem value={30}>Illinois Indiana </MenuItem>
                                <MenuItem value={30}>Iowa </MenuItem>
                                <MenuItem value={30}>Kansas </MenuItem>
                                <MenuItem value={30}>Kentucky </MenuItem>
                                <MenuItem value={30}>Louisiana </MenuItem>
                                <MenuItem value={30}>Maine </MenuItem>
                                <MenuItem value={30}>Maryland</MenuItem>
                                <MenuItem value={30}>Massachusetts </MenuItem>
                                <MenuItem value={30}>Michigan </MenuItem>
                                <MenuItem value={30}>Minnesota </MenuItem>
                                <MenuItem value={30}>Mississippi </MenuItem>
                                <MenuItem value={30}>Missouri </MenuItem>
                                <MenuItem value={30}>Montana Nebraska </MenuItem>
                                <MenuItem value={30}>Nevada </MenuItem>
                                <MenuItem value={30}>New Hampshire </MenuItem>
                                <MenuItem value={30}>New Jersey </MenuItem>
                                <MenuItem value={30}>New Mexico </MenuItem>
                                <MenuItem value={30}>New York </MenuItem>
                                <MenuItem value={30}>North Carolina </MenuItem>
                                <MenuItem value={30}>North Dakota </MenuItem>
                                <MenuItem value={30}>Ohio </MenuItem>
                                <MenuItem value={30}>Oklahoma </MenuItem>
                                <MenuItem value={30}>Oregon </MenuItem>
                                <MenuItem value={30}>Pennsylvania Rhode Island</MenuItem>
                                <MenuItem value={30}>South Carolina </MenuItem>
                                <MenuItem value={30}>South Dakota </MenuItem>
                                <MenuItem value={30}>Tennessee </MenuItem>
                                <MenuItem value={30}>Texas </MenuItem>
                                <MenuItem value={30}>Utah </MenuItem>
                                <MenuItem value={30}>Vermont </MenuItem>
                                <MenuItem value={30}>Virginia </MenuItem>
                                <MenuItem value={30}>Washington </MenuItem>
                                <MenuItem value={30}>West Virginia </MenuItem>
                                <MenuItem value={30}>Wisconsin </MenuItem>
                                <MenuItem value={30}>Wyoming</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            )
        }
        else {
            formQuestions = (<h2>Choose an option!</h2>)
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
                            onClick={this.handleClick}

                        >
                            {!this.state.loggedIn ? "Sign Up" : <CheckIcon />}
                            {/* <Icon className="">+</Icon> */}
                        </Button>
                    </form>
                </Paper>
            </div>


        )
    }

}

export default withStyles(styles)(SignUp);
