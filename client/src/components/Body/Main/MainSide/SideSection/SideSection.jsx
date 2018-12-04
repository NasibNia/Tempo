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
                <p>Rating:{rating}</p>
            </div>
        </a>
    )

}

// generates div for ratings
const generateRatings = (name, venueID) => {
    return (
        <div key={venueID} className="side-text">
                <br></br>
                <h4>{name}</h4>
                <ul class="list-inline rating-list">
                    <li onClick={handleRatingsClick} value="5" data-key={venueID}><i class="fas fa-star" ></i></li>
                    <li onClick={handleRatingsClick} value="4" data-key={venueID}><i class="fas fa-star" ></i></li>
                    <li onClick={handleRatingsClick} value="3" data-key={venueID}><i class="fas fa-star" ></i></li>
                    <li onClick={handleRatingsClick} value="2" data-key={venueID}><i class="fas fa-star" ></i></li>
                    <li onClick={handleRatingsClick} value="1" data-key={venueID}><i class="fas fa-star" ></i></li>
                </ul>
                <hr></hr>
            </div>
    )
}

const handleRatingsClick = event => {
    console.log('The star was clicked.', event.currentTarget.value);
  }

const SideItem = props => {
    if (props.data) {
        return (
            props.data.slice(0,5).map(elem => generateItems(elem.name, (elem.profilePic) ? elem.profilePic : elem.venue_picture_url, elem.rating, elem.website))
        )
    }
    else if (props.ratings) {
        return (
            props.ratings.slice(0,3).map(elem => generateRatings(elem.name, elem.id)
        
        ) 
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
            <SideItem text={props.title} type={props.userType} data={props.data} ratings={props.ratings}/>
        </div>

    )
}

export default SideSection;