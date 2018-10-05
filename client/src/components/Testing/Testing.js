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
        username : "",
        password : "",
    
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
    handleSubmitForm = event =>{
        event.preventDefault();

        if (this.state.name && this.state.password) {
            const thisUser = {
                name : this.state.name,
                password : this.state.passwrod
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

    // sign in with google
    handleGoogleSignIn  = event =>{
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

        return (
            <Grid container direction="row" justify="center" alignItems="flex-start" style={styles.tester}>
                <button id="postShow"> Post Show </button>
                <button onClick = {this.handleClick}
                > Testing </button>

                <button> Testing </button>

                <form>Form
                    <label>name</label>
                    <input  type="text" 
                            name="username" 
                            placeholder="Your name.." 
                            onChange={this.handleInputChange}
                            value = {this.state.username}
                            />
                    <label>password</label>
                    <input  type="password" 
                            name="password" 
                            placeholder="Your password.." 
                            onChange={this.handleInputChange}
                            value = {this.state.password}
                            />
                    <button type="submit" 
                            value="Submit"
                            onClick={this.handleSubmitForm}>Submit</button>
                </form>

                <button onClick = {this.handleGoogleSignIn}> Google Sign in Button</button> 

            </Grid>
        )
    }

}



export default (Testing);