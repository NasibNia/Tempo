import React, { Component } from 'react';
import NavigateItem from './NavigateItem'

class Navigate extends Component {
    render() {
        <div>
            <div className="navigate-chunk">
                <NavigateItem icon="imgURL" text="ProfileName"/>
            </div>
            <div className="navigate-chunk">
                <h2>Community</h2>
                <NavigateItem icon="imgURL" text="ProfileName"/>
                <NavigateItem icon="imgURL" text="ProfileName"/>
                <NavigateItem icon="imgURL" text="ProfileName"/>
            </div>
            <div className="navigate-chunk">
                <h2>Your Profile</h2>
                <NavigateItem icon="imgURL" text="ProfileName"/>
                <NavigateItem icon="imgURL" text="ProfileName"/>
            </div>
        </div>
    }
}

export default Navigate;