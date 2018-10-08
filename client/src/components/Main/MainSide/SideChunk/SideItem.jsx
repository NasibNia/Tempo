import React, { Component } from 'react';
import "./SideChunk.css"

class SideItem extends Component {
    render(props) {
        return(
        <div className="side-item">
            <div className="side-icon"></div>
            <h4 className="side-text">{this.props.text}</h4>
        </div>
        )
    }
}

export default SideItem;