import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import API from "../../utils/API.js";
import axios from 'axios'

import "./HeaderBar.css";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
})

class HeaderBar extends Component {


  state = {
    loggedIn: false,
    search: ""
  };



  componentDidMount() {
    API.getUser(
      // function(err,data){
      //   console.log(data)
      // }
    )
      .then(res => {
        console.log("header bar component mounting check", res.data.user);
        if (res.data.user) {
          this.setState({ loggedIn: true });
        }
        console.log("state ", this.state.loggedIn)

      });
  }
  // const user = API.getUser(
  //   function(err,data){
  //   console.log(data)
  // });

  //   console.log("header getUser: ", user)
  //   if (!user) {
  //     this.setState({loggedIn : false});
  //   }

  // }

  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({ [name]: value });

  };


  handleLogout = event => {
    event.preventDefault();
    API.logout()
      .then(res => {
        console.log("res   from logout route   ", res);
        if (res.data.logout) {
          window.location.href = "/signin";
          // return <Redirect to='/signin'/>
        } else {
          console.log("logout failed");
        }
      });

  }

  handleLogin = event => {
    console.log("login clicked")
    window.location.href = "/signin";

  }


  render(props) {
    // if (!this.state.loggedIn)
    //   return <Redirect to='/signin'/>
    const { classes } = this.props;

    let button;
    let headerIcon;
    let search =
      <TextField
        id="search-input"
        label="Email"
        className={classes.textField}
        type="text"
        name="search"
        autoComplete="search"
        margin="normal"
        variant="filled"
        onChange={this.handleInputChange}
        value={this.state.search}
        // helperText={this.state.errors.email}
      />

      ;

    if (this.state.loggedIn) {
      button = <div className="log-out-button">
        <Button variant="contained"
          color="secondary"
          name="logout"
          onClick={this.handleLogout}>
          LOG OUT
    </Button>
      </div>
      headerIcon = <div className="header-item">
        <div className="header-icon"></div>
      </div>
    } else {
      button = <div className="log-out-button">
        <Button variant="contained"
          color="secondary"
          name="login"
          onClick={this.handleLogin}>
          LOG IN
    </Button>
      </div>
    }



    return (
      <div className="header">
        <div className="header-contents">
          <div className="logo">
            <Link to="/artist"><img src="/assets/box-logo.png"></img></Link>
            <h4>{this.props.userType} suite</h4>
          </div>
          <div className="header-items">
          {search}
            {headerIcon}
            {headerIcon}
            {headerIcon}
            {button}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HeaderBar);