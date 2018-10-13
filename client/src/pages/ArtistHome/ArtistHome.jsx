import React, { Component } from 'react';
import Body from "../../components/Body";
import API from "../../utils/API";
import axios from "axios";

import "./ArtistHome.css";

const styles = {}

class ArtistHome extends Component {

    state = {
        shows: [],
        name: "",
        description: "",
        statistics: "",
        user: "artist",
        band: ""
      };
    
      componentDidMount() {
        API.getUser().then(res => {
          console.log("component mounting check", res.data);
          if (!res.data.id) {
                this.setState({loggedIn : false});
              } else {
                this.setState({loggedIn : true});
                this.loadShows(res.data.id);
              }
        });
        // this.loadShows();
        console.log("test")
    

        // console.log(API.getUser());



      }
    
      loadShows = (id) => {
        API.getBand(id)
          .then(res => {
            console.log("this is the res:",res.data)
            this.setState({band: res.data})
          })
          .catch(err => console.log(err));
      };


   render() {

       return (
           <div>
             {console.log(this.state.band)}
            <h1 style={{height: "200px", marginTop: }}>{this.state.band.name}</h1>
              {/* {console.log(this.props.match.params.id) } */}
               <Body userType = {this.state.user}/>
               {/* <h1>{this.state.band.name}</h1> */}

           </div>
           )
   }

}

export default ArtistHome;