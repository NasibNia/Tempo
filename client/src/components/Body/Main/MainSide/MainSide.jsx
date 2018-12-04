import React from 'react';
import SideSection from "./SideSection";
import "./MainSide.css"
import { Link } from 'react-router-dom'

// API call to find top bands gigging

// Top 5 bands read to gig

// Top 5 bands tracked

const DocumentLink = () => {

}

const MainSide = props => {
    console.log("middle data", props.data, props.ratings)
    return (
        <div className = "main-side-container">
            <div className="main-side">
                <SideSection header={props.userType === "artist" ? "Ready to Book" : "Ready to Gig"} title="" subtext="" userType={props.userType} data={props.data}/>
                <SideSection header={props.userType === "artist" ? "Tracked Venues" : "Tracked Artists"} title="" subtext="" userType={props.userType}  />

                <SideSection header={props.userType === "artist" ? "Rate Venues" : "Rate Artists"} title="" subtext="" userType={props.userType} ratings={props.ratings} />

                <div className="side-footer">
                    <h3><Link to={"/Terms"}>Terms &amp; Conditions</Link></h3><h3><Link to={"/Privacy"}>Privacy Policy</Link></h3><h3><Link to={"/Contact"}>Contact</Link></h3>
                    {/* <DocumentLink title="Terms and Conditions" method="terms"/>
                    <DocumentLink title="Terms and Conditions" method="terms"/> */}
                </div>
            </div>
        </div>
    )
}

export default MainSide;