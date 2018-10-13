import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
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
        marginTop: theme.spacing.unit * 10,
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
});


class SignUp extends Component {

    state = {
        email: "",
        password: "",
        category : "",
        id : "",
        loggedIn: false,
        finishedSignup: false

    }

      componentDidMount() {
        //   API.logout();
      }

    handleClick = event => {
        event.preventDefault();
        console.log("click")
        // const newBand = bands;
        this.loginTheBand();
        
    }

    loginTheBand = () => {
        const newUser = {
                         email : this.state.email, 
                         password : this.state.password
                         }
        axios.post("/band/login" , newUser)
        .then(results => {
            console.log(results);
            if (results.data.success)
                this.setState({
                    loggedIn: true,
                    id : results.data.id
                    // finishedSignup: true,
                }, ()=>console.log(this.state))
            if(!results.data.success){
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
        if (this.state.loggedIn)
            return <Redirect to={'/artist/'}/>

        return (
            <div>
                <HeaderBar />
                <Paper className={classes.paper}>
                    <form className="container" noValidate autoComplete="off" style={{ marginTop: "5%" }}>
                        <Avatar className={classes.avatar} color = "secondary">
                            <LockIcon />
                        </Avatar>
                        <h1 className = "signup">Tempo Affiliates Sign-In Here!</h1>
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
                            value={this.state.username}
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="secondary" />}
                            label="Remember me"
                        />
                        <Button variant="contained" 
                                color="secondary"
                                onClick = {this.handleClick}

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

export default withStyles(styles)(SignUp);