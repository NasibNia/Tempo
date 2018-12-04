import React, { Component } from 'react';
import "./selectArtistArray.css"


const SelectArtistCard = props => {

    return (
        <div>

            <div className="artist-card">
                <div className="artist-card-left">
                    {/* <div className="artist-card-icon" style={{ backgroundImage= 'url(' + props.icon + ')' }}></div> */}
                    <div className="artist-card-subtitle">{props.subtitle}</div>
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

    return (
        <div className="select-artist-column">
            {/* {Artists.map((Artist, description) => {
                <SelectArtistCard tempoRating={props} ticketPrice={} averageDraw={}/>
            }
            )
            } */}
        </div>
    )

}

class SelectArtistArray extends Component {

    state = {

    }

    // 4 API CALLs

    render() {
        return (
            <div className="select-artist-column-box">
                <SelectArtistColumn name="" />
                <SelectArtistColumn name="" />
                <SelectArtistColumn name="" />
                <SelectArtistColumn name="" />
            </div>
        )
    }

}

export default SelectArtistArray;