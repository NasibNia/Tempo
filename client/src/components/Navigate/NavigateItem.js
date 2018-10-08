import React, { Component } from 'react';

class NavigateItem extends Component {
    render(props) {
        <div className="navigate-item">
            <div className="navigate-icon">{props.icon}</div>
            <h3 className="navigate-text">{props.text}</h3>
        </div>
    }
}

export default NavigateItem;