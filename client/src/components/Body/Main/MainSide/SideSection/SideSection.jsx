import React from 'react';
import "./SideSection.css";

//create an individual key for each item
let keyCount = 0;

const generateItems = (name, image, rating, link) => {
    keyCount++;
    return (
        <a key={keyCount} className="side-item" href={link} target="_blank">
            <div className="side-icon" style={{backgroundImage: `url(${image})`}}></div>
            <div className="side-text">
                <h4>{name}</h4>
                <p>{rating}</p>
            </div>
        </a>
    )

}

const SideItem = props => {
    if (props.data) {
        return (
            props.data.slice(0,5).map(elem => generateItems(elem.name, (elem.profilePic) ? elem.profilePic : elem.venue_picture_url, elem.rating, elem.website))
        )
    }
    else {
        return (<div className="side-item">
            <div className="side-icon"></div>
            <div className="side-text">
                <h4>Name</h4>
                <p>Rating</p>
            </div>
        </div>) 
    }
}

const SideSection = props => {
    return (
        <div className="side-chunk">
            <h2>{props.header}</h2>
            <SideItem text={props.title} type={props.userType} data={props.data} />
        </div>

    )
}

export default SideSection;