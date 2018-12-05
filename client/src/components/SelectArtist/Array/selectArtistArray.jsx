import React, { Component } from 'react';
import "./selectArtistArray.css";
import Criterion from './../Criterion';

import API from "../../../utils/API";

const SelectArtistCard = props => {

    return (
        <div>

            <div className="artist-card">
                <div className="artist-card-left">
                    <div className="artist-card-icon" style={{ backgroundImage: 'url(' + props.icon + ')' }}></div>
                    {/* <div className="artist-card-subtitle">{props.subtitle}</div> */}
                </div>
                <div className="artist-card-right">
                    <div className="artist-card-ratings">
                        <h1>{props.tempoRating}</h1>
                        <h1>{props.ticketPrice}</h1>
                        <h1>{props.averageDraw}</h1>
                    </div>
                </div>
            </div>

        </div>
    )

}

const SelectArtistColumn = props => {

    //data sent from SelectArtistArray
    let artists = props.data;

    return (
        <div className="select-artist-column">
            {/* {Artists.map((Artist, description) => {
                <SelectArtistCard tempoRating={props} ticketPrice={} averageDraw={}/>
            }
            )
            } */
                artists ? artists.map(elem => { return <SelectArtistCard tempoRating={elem.rating} ticketPrice={elem.ticket_price} averageDraw={elem.average_draw} icon={elem.profilePic} /> }) : "We found no artists with these parameters!"
            }
        </div>
    )

}

class SelectArtistArray extends Component {

    state = {
        genres: this.props.genres,

    }

    // 4 API CALLs
    componentDidMount() {

    }

    searchBand = () => {
        API.getBandsByGenre(this.state.genre).then(res => {


        });
    }

    render() {
        return (
            <div className="select-artist-column-box">
                <SelectArtistColumn name="" data="" />
                <SelectArtistColumn name="" data="" />
                <SelectArtistColumn name="" data="" />
                <SelectArtistColumn name="" data="" />
            </div>
        )
    }

}


export default SelectArtistArray;