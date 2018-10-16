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
        title: "Venue Directory",
        type: "venue directory"
    },
    {
        title: "Past Gigs",
        type: "past gigs"
    },
    {
        title: "Community",
        type: "community events"
    }

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
    ,
    {
        title: "Artist Directory",
        type: "artist directory"
    },
    {
        title: "Post A Gig",
        type: "post gig"
    },
    {
        title: "Past Gigs",
        type: "past gigs"
    }
]

let keyCount = 0;

let renderFeed = (propTitle, propType, propUrl, propName) => {
    // console.log("feed", propUrl)
    keyCount++;
    return <FeedItem key={keyCount} title={propTitle} type={propType} url={propUrl} name={propName}/>
}

const MainMiddle = props => {

    return (

        <div className="middle-feed" >
            {(props.userType === "artist") ? (
                artistNewsFeed.map(elem =>
                    renderFeed(elem.title, elem.type, props.url, props.name))) : (venueNewsFeed.map(elem =>
                        renderFeed(elem.title, elem.type, props.url, props.name))
                )}

        </div>

    )

}

export default MainMiddle;