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
        user: "artist"
      };
      
      //``````````````````````````````commented out-Nasib
      // componentDidMount() {
      //   this.loadShows();
      //   console.log("test")
      //   console.log("params", this.props.match.params)

      //   // console.log(API.getUser());


      // }
      //``````````````````````````````Replaced-Nasib
      componentDidMount() {
        API.getUser().then(res => {
          console.log("component mounting check", res.data);
          if (!res.data.user.id) {
                this.setState({loggedIn : false});
                window.location.href = "/signin";
              } else {
                this.setState({loggedIn : true});
                // this.loadShows(res.data.user.id);
              }
        });
      }
      //``````````````````````````````endOfChange-Nasib

      loadShows = () => {
        API.getShows()
          .then(res =>
            this.setState({ shows: res.data, name: "", description: "", statistics: "" })
          )
          .catch(err => console.log(err));
      };


   render() {

       return (
           <div>
              {console.log(this.props.match.params.id) }
               <Body userType = {this.state.user}/>
           </div>
           )
   }

}

export default ArtistHome;