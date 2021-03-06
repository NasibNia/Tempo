import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import SearchIcon from '@material-ui/core/SearchIcon';
import InputAdornment from '@material-ui/core/InputAdornment';



import API from "../../utils/API.js";
import axios from 'axios'

import "./HeaderBar.css";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    transition: "0.3s ease-in-out",
  },
})

class HeaderBar extends Component {


  state = {
    loggedIn: false,
    userType: "",
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
          this.setState({
            loggedIn: true,
            userType: res.data.user.userType
          });
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

  handleKeyPress = event => {
    let searchedName = this.state.search;

    if (event.key == 'Enter') {
      console.log(this.state.search)
      API.getBandName(searchedName).then(res => {
        if (!res.data) {
          console.log("Artist profile does not exist!")
        } else {
          console.log(res.data)
          window.location.href = "/profile/" + res.data.id;
        }
      });

    }
  }


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
    let search = <div id="search-input">
      <TextField
        id="search-bar"
        placeholder="Search Artists"
        className={classes.textField}
        type="search"
        name="search"
        autoComplete="search"
        margin="normal"
        variant="filled"
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">
        //       {/* <SearchIcon /> */}
        //     </InputAdornment>
        //   ),
        // }}
        onChange={this.handleInputChange}
        value={this.state.search}
        onKeyPress={this.handleKeyPress}
      // helperText={this.state.errors.email}
      />
    </div>

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
            <Link to={"/" + this.state.userType}><img src="/assets/box-logo.png"></img></Link>
            {this.state.loggedIn ? <h4>{this.state.userType + " suite" }</h4> : ""}          </div>
          <div className="header-items">
            {this.state.loggedIn ? search : ""}
            {/* {headerIcon}
            {headerIcon}
            {headerIcon} */}
            {button}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HeaderBar);