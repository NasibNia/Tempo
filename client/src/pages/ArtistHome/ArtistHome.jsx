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
      
      componentDidMount() {
        this.loadShows();
        console.log("test")
    

        // console.log(API.getUser());



      }
    
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