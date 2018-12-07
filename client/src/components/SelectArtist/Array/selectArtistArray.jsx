import React, { Component } from 'react';
import "./selectArtistArray.css";

import API from "../../../utils/API";
import App from '../../../App';

const SelectArtistCard = props => {

    return (
        <div>

            <div className="select-artist-card">
                <div className="artist-card-left">
                    <div className="artist-card-icon" style={{ backgroundImage: 'url(' + props.icon + ')' }}></div>
                    <div className="artist-card-subtitle"></div>
                    <div className="artist-card-ratings">
                        <h2>{props.tempoRating}</h2>
                        <h2>${props.ticketPrice}</h2>
                        <h2>{props.averageDraw}</h2>
                    </div>
                </div>
                <div className="artist-card-right">
                    <div className="artist-name">
                        <h1>{props.artistName}</h1>
                    </div>

                    <div className="artist-card-description">
                        <p>{props.artistBio.length < 100 ? props.artistBio : props.artistBio.substring(0, 100) + "..."}</p>
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
            <h1>{props.title}</h1>
            {
                artists ? artists.map(elem => { return <SelectArtistCard tempoRating={elem.rating} ticketPrice={elem.ticket_price} averageDraw={elem.average_draw} icon={elem.profilePic} artistName={elem.name} artistBio={elem.description} /> }) : "We found no artists with these parameters!"
            }
        </div>
    )

}

class SelectArtistArray extends Component {

    state = {
        genre: this.props.genre,
        dataByTicketPrice: "",
        dataByDraw: "",
        data: ""

    }


    // 4 API CALLs
    componentDidMount() {
        this.searchBand();

    }

    searchBand = () => {

        // switch (this.state.genre) {
        //     case "rock":
        //         API.getRockBands().then(res => {
        //             console.log("genre check", res);
        //         });
        //     case "jazz":
        //         API.getJazzBands().then(res => {
        //             console.log("genre check", res);
        //         });
        //     case "hiphop":
        //         API.getHiphopBands().then(res => {
        //             console.log("genre check", res);
        //         });
        //     case "pop":
        //         API.getPopBands().then(res => {
        //             console.log("genre check", res);
        //         });
        //     case "acoustics":
        //         API.getAcousticsBands().then(res => {
        //             console.log("genre check", res);
        //         });
        //     case "club":
        //         API.getClubsBands().then(res => {
        //             console.log("genre check", res);
        //         });
        //     case "electronic":
        //         API.getElectronicBands().then(res => {
        //             console.log("genre check", res);
        //         });
        // }

        API.getRockBands().then(res => {

            console.log("genre check", res);

            let sortedByTicketPrice = this.sortByTicketPrice(res.data);
            let sortedByDraw = this.sortByDraw(res.data);

            this.setState({
                data: res.data,
                dataByTicketPrice: sortedByTicketPrice,
                dataByDraw: sortedByDraw,
            });
        }

        )
    }

    swap = (array, i, j) => {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    sortByTicketPrice = (artistJson) => {

        if (artistJson.length < 2) {
            return artistJson;
        }

        var pivot = artistJson[0];
        var lesser = [];
        var greater = [];

        for (var i = 1; i < artistJson.length; i++) {
            if (artistJson[i].ticket_price < pivot.ticket_price) {
                lesser.push(artistJson[i]);
            } else {
                greater.push(artistJson[i]);
            }
        }

        return this.sortByTicketPrice(lesser).concat(pivot, this.sortByTicketPrice(greater)).slice(0,9).reverse();

    }

    sortByDraw = (artistJson) => {
        if (artistJson.length < 2) {
            return artistJson;
        }

        var pivot = artistJson[0];
        var lesser = [];
        var greater = [];

        for (var i = 1; i < artistJson.length; i++) {
            if (artistJson[i].average_draw < pivot.average_draw) {
                lesser.push(artistJson[i]);
            } else {
                greater.push(artistJson[i]);
            }
        }

        return this.sortByDraw(lesser).concat(pivot, this.sortByDraw(greater)).slice(0,9).reverse();

    }

    render() {
        return (
            <div className="select-artist-container">
                <SelectArtistColumn title="Ticket Price" data={this.state.dataByTicketPrice} />
                <SelectArtistColumn title="Average Attendance" data={this.state.dataByDraw} />
                <SelectArtistColumn title="Best Fit" data={this.state.data} />
                <SelectArtistColumn title="On the Rise" data={this.state.data} />
            </div>
        )
    }

}


export default SelectArtistArray;