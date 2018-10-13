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

let renderFeed = (propTitle, propType, propUrl) => {
    // console.log("feed", propUrl)
    return <FeedItem title={propTitle} type={propType} url={propUrl}/>
}

const MainMiddle = props => {

    return (

        <div className="middle-feed" >
            {(props.userType === "artist") ? (
                artistNewsFeed.map(elem =>
                    renderFeed(elem.title, elem.type, props.url))) : (venueNewsFeed.map(elem =>
                        renderFeed(elem.title, elem.type, props.url))
                )}

        </div>

    )

}

export default MainMiddle;