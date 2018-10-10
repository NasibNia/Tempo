import React, { Component } from 'react';
import Body from "../../components/Body";
import API from "../../utils/API";

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
               <Body userType = {this.state.user}/>
           </div>
           )
   }

}

export default ArtistHome;