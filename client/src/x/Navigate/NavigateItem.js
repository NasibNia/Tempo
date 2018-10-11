import React, { Component } from 'react';
import "./Navigate.css"

class NavigateItem extends Component {
    render(props) {
        return(
        <div className="navigate-item" onClick={() => this.props.click(this.props.type)}>
            <div className="navigate-icon"></div>
            <h4 className="navigate-text">{this.props.text}</h4>
        </div>
        )
    }
}

export default NavigateItem;