import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import bands from "../Testing/bands.json";
// import Button from "./button.js";
import axios from "axios";

const styles = {
    tester: {
        position: "relative",
        width: "100%",
        margin: "50px 0 0 0",
        color: "rgb(195, 200, 240)"
    }
}

class Testing extends Component {



    
    state = {
        email : "",
        password : "",
        role:""
    
    }
    
    
    handleClick = () =>{
         console.log("click")
    
            const newBand = bands;
            this.postTheBand();      
    }
    postTheBand = ()=>{
        console.log("inside postTheBand")
        axios.post("/api/bands" , bands)
        .then(results => 
            console.log(results)
        );
    };
    
    handleInputChange = event => {

        const {name,value} = event.target;
        this.setState({[name] : value});
    };
    handleSignUp= event =>{
        event.preventDefault();

        if (this.state.name && this.state.password && this.state.role) {
            const currentUser = {
                email : this.state.name,
                password : this.state.passwrod,
                role : this.state.role
            };
            if (this.state.role === "band"){
                // I am not sure about this part
                axios.post("/band/signup" , currentUser)
            } else if (this.state.role === "venue"){
                // I am not sure about this part
                axios.post("/venue/signup" , currentUser)
            }
            
        }

    }
    handleSignIn= event =>{
        event.preventDefault();

        if (this.state.name && this.state.password && this.state.role) {
            const currentUser = {
                email : this.state.name,
                password : this.state.passwrod,
                role : this.state.role
            };
            if (this.state.role === "band"){
                // I am not sure about this part
                axios.post("/band/signIn" , currentUser)
            } else if (this.state.role === "venue"){
                // I am not sure about this part
                axios.post("/venue/signIn" , currentUser)
            }
            
        }

    }

    // sign in with google
    handleGoogleSignIn  = event =>{
    }

    //check bads, or venues to see if the name and password matches any record
    searchUser = (user) => {
        // axios.get("/api/bands")
        // .then(results =>{
        //     const isUserinBands = results.find({"email" : user.email});
        // });
        console.log("user exists");
        return true;
    };

    addUser = (user) => {
        console.log("add user")

    }


    render() {

        return (
            <Grid container direction="row" justify="center" alignItems="flex-start" style={styles.tester}>
                <button id="postShow"> Post Show </button>
                <button onClick = {this.handleClick}
                > Testing </button>

                <button> Testing </button>

                <form>Form
                    <label>name</label>
                    <input  type="text" 
                            name="email" 
                            placeholder="Your name.." 
                            onChange={this.handleInputChange}
                            value = {this.state.email}
                            />
                    <label>password</label>
                    <input  type="password" 
                            name="password" 
                            placeholder="Your password.." 
                            onChange={this.handleInputChange}
                            value = {this.state.password}
                            />
                    <label><input type="checkbox" 
                                  name = "venue"
                                  value={this.state.role}
                                  onChange = {this.handleInputChange}
                                  />venue</label>
                    <label><input type="checkbox" 
                                  name = "band"
                                  value={this.state.role}
                                  onChange = {this.handleInputChange}
                                  />band</label>
                    <button type="submit" 
                            value="Submit"
                            onClick={this.handleSingIn}>SignIn</button>
                    <button type="submit" 
                            value="Submit"
                            onClick={this.handleSingUp}>SignUp</button>
                </form>

                <button onClick = {this.handleGoogleSignIn}> Google Sign in Button</button> 

            </Grid>
        )
    }

}



export default (Testing);