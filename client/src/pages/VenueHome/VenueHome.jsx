import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Body from "../../components/Body";

import API from "../../utils/API";


import "./VenueHome.css";

const styles = {

    column: {
        position: "fixed"
    }


}

class VenueHome extends Component {

    state = {
        bands: [],
        name: "",
        description: "",
        statistics: "",
        user: "venue"
      };
    
      componentDidMount() {
        // this.loadBands();
        console.log("params", this.props.match.url)
      }
    
    //   loadBands = () => {
    //     API.getBands()
    //       .then(res =>
    //         this.setState({ bands: res.data, name: "", description: "", statistics: "" })
    //       )
    //       .catch(err => console.log(err));
    //   };

    render() {

        return (
            <div>
                {/* <Header />
                <Grid container direction="row" justify="center" alignItems="flex-start" spacing={24} style={{ marginTop: "5%" }}>
                    <Nav className = {styles.column}/>
                    <Main />
                    <Shows className = {styles.column}/>
                </Grid> */}
                <Body userType={this.state.user} url={this.props.match.url} />
            </div>
        )
    }

}

export default VenueHome;