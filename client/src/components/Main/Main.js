import React, { Component } from 'react';
import Panel from "../Panel";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

//Temporary Main 

class Main extends Component {

    render() {
        return (

            <div id="main">
                <p class="title">News Feed</p>
                <hr></hr>

                <Panel />
            </div>
        )
    }
}

export default Main;