import React, { Component } from 'react';
import "./SideSection.css";
import API from '../../../../../utils/API';


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
                    <li onClick={handleRatingsClick} value="5" datakey={venueID}><i class="fas fa-star" ></i></li>
                    <li onClick={handleRatingsClick} value="4" datakey={venueID}><i class="fas fa-star" ></i></li>
                    <li onClick={handleRatingsClick} value="3" datakey={venueID}><i class="fas fa-star" ></i></li>
                    <li onClick={handleRatingsClick} value="2" datakey={venueID}><i class="fas fa-star" ></i></li>
                    <li onClick={handleRatingsClick} value="1" datakey={venueID}><i class="fas fa-star" ></i></li>
                </ul>
                <hr></hr>
            </div>
    )
}

// posts rating on star click
const handleRatingsClick = (event) => {
    const id = event.currentTarget.getAttribute('datakey');
    console.log('The star was clicked.', id);

    let ratingsData = {
        userIsBand: true,
        BandId: id,
        VenueId: id,
        rating: event.currentTarget.value
    };

    let ratedType;
    API.getUser().then(res => {
        console.log(res.data)
        if (res.data.user.userType === "artist") {
            ratingsData.BandId = res.data.user.id;
            ratedType = "venue"
        } else {
            ratingsData.userIsBand = false;
            ratingsData.VenueId = res.data.user.id;
            ratedType = "artist"
        }
        console.log("rating obj is ", ratingsData)
        API.saveRating(ratingsData).then (createRatingRes => {
            console.log("test",createRatingRes)

        })
    })
  }

const SideItem = props => {
    if (props.data) {
        return (
            props.data.slice(0,5).map(elem => generateItems(elem.name, (elem.profilePic) ? elem.profilePic : elem.venue_picture_url, elem.rating, elem.website))
        )
    }
    else if (props.ratings) {
        // API.getUser().then(res => {
        //     API.getRatingsbyId(res.data.user.userType, res.data.user.id)
        //     .then(res => {
        //         console.log("ratings res", res)
        //         for (let i = 0; i < res.data.length; i++){
        //             for (let j = 0; j < props.ratings.length; j++) {
        //                 console.log(res.data[i].VenueId, props.ratings[j].id)
        //                 if (res.data[i].VenueId === props.ratings[j].id) {
        //                     props.ratings.splice(j, 1)
        //                 }

        //             }
        //         }
        //         console.log("spliced ratings ", props.ratings)
                
        //     })
        // })
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