import React, { Component } from 'react';
import "./MainMiddle.css"
import FeedItem from "./FeedItem"

class MainMiddle extends Component {
    state= {
    
    }
    render(props) {
        return(
        <div className="middle-feed">
            {/* Option 1 */}
            <FeedItem title="Gig Board" type="gigboard" />

            {/* Option 2 */}
            <FeedItem>

            </FeedItem>        

            <FeedItem title="Calendar" type="calendar" />
        </div>
        )
    }
}

export default MainMiddle;

// const MainMiddle = (props, children) => (
//     <div className="middle-feed">
//     {/* Option 1 */}
//     <FeedItem title="Gig Board" type="gigboard" />

//     {/* Option 2 */}
//     <FeedItem>

//     </FeedItem>        

//     <FeedItem title="Calendar" type="calendar" />
// </div>
// )


