import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import "./HeaderBar.css";
import { Link } from 'react-router-dom'
import API from "../../utils/API.js";
import axios from 'axios'


class HeaderBar extends Component {


  state ={
    loggedIn : false
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
                this.setState({loggedIn : true});
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
    
  

  handleLogout  = event =>{
    event.preventDefault();
      API.logout()
      .then(res=>{
        console.log("res   from logout route   ", res);
        if (res.data.logout){
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

    let button;
    let headerIcon;

    if (this.state.loggedIn) {
      button = <div className="log-out-button">
        <Button variant="contained"
          color="secondary"
          name="logout"
          onClick={this.handleLogout}>
          LOG OUT
    </Button>
      </div>
      headerIcon =  <div className="header-item">
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
            <h1><Link to="/artist">Tempo</Link></h1>
            <h4>{this.props.userType} suite</h4>
          </div>
          <div className="header-items">
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

export default HeaderBar;