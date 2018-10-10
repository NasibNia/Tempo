import React from 'react';
import "./SideChunk.css"

const SideItem = props => {
    return(
        <div className="side-item">
            <div className="side-icon"></div>
            <div className="side-text">
                <h4>{props.text}</h4>
                <p>{props.subtext}</p>
            </div>
        </div>
    )
}

export default SideItem;