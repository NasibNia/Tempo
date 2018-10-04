import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class VenueHome extends Component {

    render() {

        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Test</Paper>

                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Test</Paper>

                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Test</Paper>

                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default VenueHome;