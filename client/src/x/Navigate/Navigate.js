import React, { Component } from 'react';
import NavigateItem from './NavigateItem'
import "./Navigate.css"

class Navigate extends Component {
    render() {
        return(
        <div className="navigate-wrap">
            <div className="navigate-chunk">
                <h2>Your Profile</h2>
                <NavigateItem icon="imgURL" text="Profile Name" type ={"profile"} click={this.props.click}/>
                <NavigateItem icon="imgURL" text="Post A Gig"/>
                <NavigateItem icon="imgURL" text="Past Gigs"/>
            </div>
            <div className="navigate-chunk">
                <h2>Community</h2>
                <NavigateItem icon="imgURL" text="News Feed"/>
                <NavigateItem icon="imgURL" text="Calendar"/>
                <NavigateItem icon="imgURL" text="Local Events"/>
                <NavigateItem icon="imgURL" text="Venue Directory"/>
            </div>
        </div>
        )
    }
}

export default Navigate;