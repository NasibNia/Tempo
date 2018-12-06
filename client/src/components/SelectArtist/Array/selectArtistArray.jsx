import React, { Component } from 'react';
import "./SelectArtistArray.css";
import Criterion from '../Criterion';

import API from "../../../utils/API";
import App from '../../../App';

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
        data: ""

    }


    // 4 API CALLs
    componentDidMount() {
        this.searchBand();

    }

    searchBand = () => {

        switch (this.state.genres) {
            case "rock":
                API.getRockBands().then(res => {
                    console.log("genre check", res);
                });
            case "jazz":
                API.getJazzBands().then(res => {
                    console.log("genre check", res);
                });
            case "hiphop":
                API.getHiphopBands().then(res => {
                    console.log("genre check", res);
                });
            case "pop":
                API.getPopBands().then(res => {
                    console.log("genre check", res);
                });
            case "acoustics":
                API.getAcousticsBands().then(res => {
                    console.log("genre check", res);
                });
            case "club":
                API.getClubsBands().then(res => {
                    console.log("genre check", res);
                });
            case "electronic":
                API.getElectronicBands().then(res => {
                    console.log("genre check", res);
                });
        }

        API.getRockBands().then(res => {

            console.log("genre check", res);
        });

    }

    render() {

        // test data

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