import React from 'react';
import "./Navigate.css"
import { Link } from 'react-router-dom'

const NavigateItem = props => {
    return (
        <div className="navigate-item" onClick={() => this.props.click(props.type)}>
            <div className="navigate-icon"></div>
            <h4 className="navigate-text">{props.text}</h4>
        </div>
    )
}

const Navigate = props => {
    return (
        <div className="navigate-container">
            <div className="navigate-wrap">
                <div className="navigate-chunk">
                    <h2>Your Profile</h2>
                    <NavigateItem icon="imgURL" text="Profile Name" type={"profile"} click={props.method} />
                    <NavigateItem icon="imgURL" text={props.userType === "artist" ? "Find a Gig" : "Post a Gig"} type={"profile"} click={props.method} />
                    <NavigateItem icon="imgURL" text="Past Gigs" type={"profile"} click={props.method} />
                </div>
                <div className="navigate-chunk">
                    <h2>Community</h2>
                    <NavigateItem icon="imgURL" text="News Feed" type={"profile"} click={props.method} />
                    <NavigateItem icon="imgURL" text="Calendar" type={"profile"} click={props.method} />
                    <NavigateItem icon="imgURL" text="Local Events" type={"profile"} click={props.method} />
                    <NavigateItem icon="imgURL" text={props.userType === "artist" ? "Venue Directory" : "Artist Directory"} type={"profile"} click={props.method} />
                </div>
                <div className="navigate-footer">
                    <h3><Link to={"/careers"}>What is SutroLabs?</Link></h3><h3><Link to={"/sfskateclub"}>Philanthropy</Link></h3><h3><Link to={"/careers"}>Careers</Link></h3>
                </div>
            </div>
        </div>
    )
}

export default Navigate;