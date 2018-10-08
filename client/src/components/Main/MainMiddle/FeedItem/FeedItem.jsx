import React, { Component } from 'react';
import WidgetItem from "./Widget";
import "./FeedItem.css"

class FeedItem extends Component {
    render(props) {
        return(
        <div className="feed-item">
            <h2>Item Name</h2>
            <WidgetItem />
        </div>
        )
    }
}


export default FeedItem; 