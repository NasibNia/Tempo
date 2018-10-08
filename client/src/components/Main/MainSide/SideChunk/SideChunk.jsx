import React, { Component } from 'react';
import "./SideChunk.css"
import SideItem from "./SideItem.jsx"

class SideChunk extends Component {
   render(props) {
       return(
       <div className="side-chunk">
           <h2>Title</h2>
               <SideItem text="test"/>
               <SideItem text="test"/>
               <SideItem text="test"/>
       </div>
       )
   }
}


export default SideChunk;