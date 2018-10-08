import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import "./Footer.css"

const styles = {
    footer: {
        position: "relative",
        height: "25vh",
        width: "100%",
        margin: "20px 0 0 0",
        backgroundImage: "linear-gradient(#741D2B, #551620)",
        color: "rgb(195, 200, 240)"
    }
}

class Footer extends Component {

    render() {

        return (
            <Grid container direction="row" justify="center" alignItems="flex-start" style={styles.footer}>
                <p id="footer-text"><span ><a id="github" href="https://github.com/NasibNia/Tempo"><i class="fab fa-github"></i> Github </a>|</span> Developed in San Francisco, CA © 2018 Tempo</p>
            </Grid>
        )
    }

}

export default withStyles(styles)(Footer);