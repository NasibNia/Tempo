import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import HeaderBar from "../../components/HeaderBar"
import Array from "../../components/SelectArtist/Array/"
import Criterion from "../../components/SelectArtist/Criterion"

import API from "../../utils/API";
import axios from "axios";


import "./selectartist.css"

const styles = {}

class SelectArtist extends Component {

  state = {

  };
  
  componentDidMount() {


  };


  render() {

    return (
      <div>
          <HeaderBar />
          {/* <Criterion />
          <Array />  */}
      </div>
    )
  }

}

export default SelectArtist;