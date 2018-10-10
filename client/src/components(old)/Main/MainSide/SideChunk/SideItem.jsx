import React, { Component } from 'react';
import "./SideChunk.css"

class SideItem extends Component {
    render(props) {
        return(
        <div className="side-item">
            <div className="side-icon"></div>
            <div className="side-text">
                <h4>{this.props.text}</h4>
                <p>{this.props.subtext}</p>
            </div>
        </div>
        )
    }
}

export default SideItem;