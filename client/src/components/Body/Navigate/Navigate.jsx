import React from 'react';
import "./Navigate.css"
import { Link } from 'react-router-dom'


const NavigateItem = props => {
    return (
        <div className="navigate-item" onClick={() => props.click(props.type)}>
            <div className="navigate-icon" style={{ backgroundImage:'url(' + props.icon + ')', borderRadius: props.radius}}></div>
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
                    <NavigateItem icon={props.pic} text= {props.name ? props.name :"Profile Name"} type={"profile"} click={props.method} radius={"25px"}/>
                    <NavigateItem icon="/assets/iconography2-06.png" text={props.userType === "artist" ? "Find a Gig" : "Post a Gig"} type={"profile"} click={props.method} />
                    <NavigateItem icon="/assets/iconography2-03.png" text="Past Gigs" type={"profile"} click={props.method} />
                </div>
                <div className="navigate-chunk">
                    <h2>Community</h2>
                    <NavigateItem icon="/assets/iconography2-04.png" text="News Feed" type={"profile"} click={props.method} />
                    <NavigateItem icon="/assets/iconography2-01.png" text="Calendar" type={"profile"} click={props.method} />
                    <NavigateItem icon="/assets/iconography2-05.png" text="Local Events" type={"profile"} click={props.method} />
                    <NavigateItem icon="/assets/iconography2-02.png" text={props.userType === "artist" ? "Venue Directory" : "Artist Directory"} type={"profile"} click={props.method} />
                </div>
                <div className="navigate-footer">
                    <h3><Link to={"/careers"}>What is SutroLabs?</Link></h3><h3><Link to={"/sfskateclub"}>Philanthropy</Link></h3><h3><Link to={"/careers"}>Careers</Link></h3>
                </div>
            </div>
        </div>
    )
}

export default Navigate;