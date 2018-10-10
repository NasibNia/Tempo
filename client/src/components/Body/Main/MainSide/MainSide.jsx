import React  from 'react';
import SideChunk from "./SideChunk";
import "./MainSide.css"

const MainSide = props => {
    return(
        <div className="main-side">
            <SideChunk />
            <SideChunk />
        </div>
        )
}

export default MainSide;