import React, { Component } from 'react';
import "./MainMiddle.css"
import FeedItem from "./FeedItem"

class MainMiddle extends Component {
    render(props) {
        return(
        <div className="middle-feed">
            <FeedItem title="Add a Gig" />
            <FeedItem title="Calendar" type="calendar"/>
        </div>
        )
    }
}

export default MainMiddle;