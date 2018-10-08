import React, { Component } from 'react';
import SideChunk from "./SideChunk";
import "./MainSide.css"

class MainSide extends Component {
    render(props) {
        return(
        <div className="main-side">
            <SideChunk />
        </div>
        )
    }
}


export default MainSide;