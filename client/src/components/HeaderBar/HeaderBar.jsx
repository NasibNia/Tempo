import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';
import "./HeaderBar.css";
import API from "../../utils/API.js";
import axios from 'axios'


class HeaderBar extends Component {

  state ={
    loggedIn : true
  };


  componentDidMount() {

    console.log("state ", this.state.loggedIn)    
  //   axios.get("/api/user").then(function(data){
  //     console.log("getUser ",data.data)
  //     // Make sure the data contains the username as expected before using it
  //     if (data.hasOwnProperty('user')) {
  //         console.log('user: ' + data.data.user);
  //         return data.data.user;
  //     }
  // });

      API.getUser()
        .then(res => {
          console.log("component mounting check", res.data);
          if (!res.data.id) {
                this.setState({loggedIn : false});
              } else {
                this.setState({loggedIn : true});
              }
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
      API.logout()
      .then(res=>{
        console.log("res   from logout route   ", res);
        if (res.data.logout){
          this.setState({loggedIn : false});
        } else {
          console.log("logout failed");
        }
      });
      
  }
    
  handleLogin  = event =>{
    console.log("login clicked")
  }


  render(props) {
    if (!this.state.loggedIn && window.location.href !== "http://localhost:3000/signin"){
      return <Redirect to='/signin'/>
  }
      
    
  

    let button;
    if (this.state.loggedIn) {
      button = <div className="log-out-button">
      <Button variant="contained" 
              color="secondary"
              name="logout"
              onClick={this.handleLogout}>
        LOG OUT
    </Button>
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
            <h1>Tempo</h1>
          </div>
          <div className="header-items">
            <div className="header-item">
              <div className="header-icon"></div>
            </div>
            <div className="header-item">
              <div className="header-icon"></div>
            </div>
            <div className="header-item">
              <div className="header-icon"></div>
            </div>
            <div className="header-item">
              <div className="header-icon"></div>
            </div>
            <div className="header-item">
              <div className="header-icon"></div>
            </div>
            {button}
            

          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBar;