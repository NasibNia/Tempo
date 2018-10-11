import React from 'react';
import "./SideSection.css"

const SideItem = props => {
    return (

        <div className="side-item">
            <div className="side-icon"></div>
            <div className="side-text">
                <h4>{props.text}</h4>
                <p>{props.subtext}</p>
            </div>
        </div>
    )
}

const SideSection = props => {
    return (

        <div className="side-chunk">
            <h2>{props.header}</h2>
            <SideItem text={props.title} type={props.userType} />
       </div>

    )
}

export default SideSection;