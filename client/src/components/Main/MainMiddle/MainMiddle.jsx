import React, { Component } from 'react';
import "./MainMiddle.css"
import FeedItem from "./FeedItem"

class MainMiddle extends Component {
    render(props) {
        return(
        <div className="middle-feed">
            <FeedItem />
        </div>
        )
    }
}


export default MainMiddle;