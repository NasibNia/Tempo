import React from 'react';
import SideSection from "./SideSection";
import "./MainSide.css"

// API call to find top bands gigging

// Top 5 bands read to gig

// Top 5 bands tracked

const MainSide = props => {
    return (
        <div className = "main-side-container">
                <div className="main-side">
                    <SideSection header={props.userType === "artist" ? "Ready to Book" : "Ready to Gig"} title="" subtext="" userType={props.userType} />
                    <SideSection header={props.userType === "artist" ? "Tracked Venues" : "Tracked Artists"} title="" subtext="" userType={props.userType} />
                </div>
        </div>
    )
}

export default MainSide;