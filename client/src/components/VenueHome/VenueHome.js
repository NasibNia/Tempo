import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Navbar from "../Navbar"

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
                <Grid item xs={2}>
                    <Paper >Test</Paper>

                </Grid>
                <Grid item xs={6}>
                    <Paper >Test</Paper>

                </Grid>
                <Grid item xs={2}>
                    <Paper >Test</Paper>

                </Grid>
            </Grid>
        )
    }

}

export default VenueHome;