import React, { Component } from 'react';
import WidgetItem from "./Widget";
import "./FeedItem.css"

class FeedItem extends Component {
    render() {
        return(
        <div className="feed-item">
            <h2>{this.props.title}</h2>
            <WidgetItem type={this.props.type} url={this.props.url} />
            {this.props.children}
        </div>
        )
    }
}


export default FeedItem; 