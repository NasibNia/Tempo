import React from 'react';
import "./SideSection.css";


const generateItems = (name, image, rating) => {
    return (
        <div className="side-item">
            <div className="side-icon" style={{backgroundImage: `url(${image})`}}></div>
            <div className="side-text">
                <h4>{name}</h4>
                <p>{rating}</p>
            </div>
        </div>
    )

}

const SideItem = props => {
    if (props.data) {
        console.log("Side Data", props.data)
        return (
            props.data.map(elem => generateItems(elem.name, elem.profilePic, elem.rating))
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