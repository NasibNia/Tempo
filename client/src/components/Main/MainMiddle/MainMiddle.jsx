import React, { Component } from 'react';
import "./MainMiddle.css"
import FeedItem from "./FeedItem"

class MainMiddle extends Component {
    render(props) {
        return(
        <div className="middle-feed">
            <FeedItem title="Gig Board" type="gigboard" />
            <FeedItem title="Calendar" type="calendar" />
        </div>
        )
    }
}

export default MainMiddle;