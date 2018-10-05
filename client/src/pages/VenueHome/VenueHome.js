import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from "../../components/Header"
import Nav from "../../components/Nav";
import Main from "../../components/Main";
import Avatar from '@material-ui/core/Avatar';

import "./VenueHome.css";

const styles = {
    // container: {
    //     margin: "0px 10% 0px 10%"
    // } GAAAAAYYYYYYYYYYYYYYY

}

class VenueHome extends Component {

    render() {

        return (
            <div>
                <Header />
                <Grid container direction="row" justify="center" alignItems="flex-start" spacing={24} style={{ marginTop: "3%" }}>
                    <Nav />
                    <Main />
                    <Grid item xs={3}>
                            <div className="tester">
                                <p class="title">Gigs</p>
                                <hr></hr>
                                test
                        </div>

                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default VenueHome;