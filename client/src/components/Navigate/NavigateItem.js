import React, { Component } from 'react';
import "./Navigate.css"

class NavigateItem extends Component {
    render(props) {
        return(
        <div className="navigate-item">
            <div className="navigate-icon"></div>
            <h4 className="navigate-text">{this.props.text}</h4>
        </div>
        )
    }
}

export default NavigateItem;