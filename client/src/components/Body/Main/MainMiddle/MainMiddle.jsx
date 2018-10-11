import React from 'react';
import "./MainMiddle.css"
import FeedItem from "./FeedItem"

let artistNewsFeed = [
    {
        title: "Your Profile",
        type: "your profile"
    },
    {
        title: "Calendar",
        type: "calendar"
    },
    {
        title: "Gig Board",
        type: "gig board"
    },
    {
        title: "Past Gigs",
        type: "past gigs"
    },
    {
        title: "Community",
        type: "community events"
    },
    {
        title: "Venue Directory",
        type: "venue directory"
    },

]

let venueNewsFeed = [
    {
        title: "Your Profile",
        type: "your profile"
    },
    {
        title: "Calendar",
        type: "calendar"
    },
    {
        title: "Community",
        type: "community events"
    },
    {
        title: "Gig Board",
        type: "gig board"
    },
    {
        title: "Post A Gig",
        type: "post gig"
    },
    {
        title: "Past Gigs",
        type: "past gigs"
    },
    {
        title: "Artist Directory",
        type: "artist directory"
    }
]

let renderFeed = (propTitle, propType) => {

    return <FeedItem title={propTitle} type={propType} />
}

const MainMiddle = props => {

    return (

        <div className="middle-feed" uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 500">
            {(props.userType === "artist") ? (
                artistNewsFeed.map(elem =>
                    renderFeed(elem.title, elem.type))) : (venueNewsFeed.map(elem =>
                        renderFeed(elem.title, elem.type))
                )}

            {/* 
           <FeedItem title="Community Events" type="community events" />
           <FeedItem title="Calendar" type="calendar" />
           <FeedItem title="Gig Board" type="gig board" />
           <FeedItem title="Post a Gig" type="post gig" />
           <FeedItem title="Past Gigs" type="past gigs" />
           <FeedItem title="Venue Directory" type="venue directory" />
           <FeedItem title="Artist Directory" type="artist directory" />           
           <FeedItem title="Your Profile" type="your profile" /> */}

        </div>

    )

}

export default MainMiddle;