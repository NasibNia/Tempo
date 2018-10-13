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
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import Slide from '@material-ui/core/Slide';



import { validations } from './validations';
import API from "../../utils/API.js";
import axios from "axios";



import "./signin.css"

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "column"
    },
    paper: {
        borderTop: `7px solid ${theme.palette.secondary.main}`,
        marginTop: theme.spacing.unit * 5,
        margin: "auto",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        width: "400px"
    },
    avatar: {
        margin: "auto",
        backgroundColor: theme.palette.secondary.dark,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
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


class SignIn extends Component {

    state = {
        email: "",
        password: "",
        category: "",
        id: "",
        errors: {
            name: "",
            email: "",
            password: "",
            passwordRepeat: ""
        },
        loggedIn: false,
        loading: false,
        redirect: false


    }

    componentDidMount() {
        //   API.logout();
    }

    handleClick = event => {
        event.preventDefault();
        console.log("click")
        // const newBand = bands;

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
                    this.loginTheBand();
                }, 2000);
            },
        )

    }

    loginTheBand = () => {
        const newUser = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post("/band/login", newUser)
            .then(results => {
                console.log(results);
                if (results.data.success)
                    this.setState({
                        loggedIn: true,
                        id: results.data.id
                    }, () => console.log(this.state))
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
                email: this.state.email,
                password: this.state.password,
            }
        );

        this.setState({ errors });
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
                console.log("welcome back to the page")
            }
            //if not add it to the database
            else {
                this.addUser(thisUser);
            }
        }
    }

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
        let id = this.state.id;

        //separated setTimout from the return Redirect since the render() method needs to directly return the Redirect route. It cannot be done within a function
        if (this.state.loggedIn) {
            setTimeout(() => { this.setState({ redirect: true }) }, 1000)
        }

        if (this.state.redirect)
            return <Redirect to={'/artist/' + id} />


        return (
            <div>
                <HeaderBar />
                <Slide direction="down" in={true} mountOnEnter unmountOnExit>
                <h1 className = "signinTitle"><span id="bold">Welcome Back</span> to Tempo</h1>
                </Slide>
                <Paper className={classes.paper}>
                    <form className="container" noValidate autoComplete="off" style={{ marginTop: "5%" }}>
                        <Avatar className={classes.avatar} color="secondary">
                            <LockIcon />
                        </Avatar>
                        <h1 className="signin">Tempo Affiliates Sign-In Here!</h1>
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="secondary" />}
                            label="Remember me"
                        />
                        <Button variant="contained"
                            color="secondary"
                            className={this.state.loggedIn ? classes.buttonSuccess : ""}
                            onClick={this.handleClick}

                        >
                            {!this.state.loggedIn ? "Login" : <CheckIcon />}
                            {/* <Icon className="">+</Icon> */}
                        </Button>
                        {this.state.loading && <CircularProgress size={30} className={classes.buttonProgress} />}
                    </form>
                </Paper>
            </div>


        )
    }

}

export default withStyles(styles)(SignIn);