import React, { Component } from 'react';
import NavigateItem from './NavigateItem'
import "./Navigate.css"

class Navigate extends Component {
    render() {
        return(
        <div className="navigate-wrap">
            <div className="navigate-chunk">
                <h2>Your Profile</h2>
                <NavigateItem icon="imgURL" text="ProfileName"/>
                <NavigateItem icon="imgURL" text="PostAGig"/>
                <NavigateItem icon="imgURL" text="PastGigs"/>
            </div>
            <div className="navigate-chunk">
                <h2>Community</h2>
                <NavigateItem icon="imgURL" text="ProfileName"/>
                <NavigateItem icon="imgURL" text="ProfileName"/>
                <NavigateItem icon="imgURL" text="ProfileName"/>
            </div>
        </div>
        )
    }
}

export default Navigate;