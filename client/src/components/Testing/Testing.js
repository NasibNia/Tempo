import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


const styles = {
    tester: {
        position: "relative",
        width: "100%",
        margin: "50px 0 0 0",
        color: "rgb(195, 200, 240)"
    }
}

class Testing extends Component {

    render() {

        return (
            <Grid container direction="row" justify="center" alignItems="flex-start" style={styles.tester}>
                <button> Testing </button>
                <button> Testing </button>

                <button> Testing </button>

            </Grid>
        )
    }

}

export default (Testing);