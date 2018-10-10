import React from 'react';
import "./MainMiddle.css"
import FeedItem from "./FeedItem"

const MainMiddle = props => {

    return(

        <div className="middle-feed">
           <FeedItem title="Community Events" type="community events" />
           <FeedItem title="Calendar" type="calendar" />
           <FeedItem title="Gig Board" type="gig board" />
           <FeedItem title="Post a Gig" type="post gig" />
           <FeedItem title="Past Gigs" type="past gigs" />
           <FeedItem title="Venue Directory" type="venue directory" />
           <FeedItem title="Artist Directory" type="artist directory" />           
           <FeedItem title="Your Profile" type="your profile" />
        </div>

    )

}

export default MainMiddle