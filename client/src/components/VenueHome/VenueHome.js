import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Navbar from "../Navbar"
import Avatar from '@material-ui/core/Avatar';

import "./VenueHome.css";

const styles = {
    // container: {
    //     margin: "0px 10% 0px 10%"
    // }

}

class VenueHome extends Component {

    render() {

        return (
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={24}>
            <Navbar />
                <Grid item xs={4}>
                    <Paper >
                        <p class = "title">Calendar</p>
                        <hr></hr>
                    </Paper>

                </Grid>
                <Grid item xs={6}>
                    <Paper >
                        <p class = "title">News Feed</p>
                        <hr></hr>

                    </Paper>

                </Grid>
            </Grid>
        )
    }

}

export default VenueHome;