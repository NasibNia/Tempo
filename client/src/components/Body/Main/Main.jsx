import React, { Component } from 'react';
import MainSide from "./MainSide";
import MainMiddle from "./MainMiddle";

// Utilities
import API from "../../../utils/API";

import "./Main.css";

class Main extends Component {

    state = {
        data: [],
        ratings: []
    }

    componentDidMount() {
        if (this.props.userType === "venue") {
            API.getReadyBands()
                .then(res => {
                    console.log("res.data", res.data);
                    // API.calculateRatingById()
                    this.setState({ data: res.data })
                }
                )
                .catch(err => console.log(err));
                API.getBands()
                .then(res => {
                    API.getUser().then(userRes => {
                        API.getRatingsbyId(userRes.data.user.userType, userRes.data.user.id)
                        .then(ratingsRes => {
                            console.log("ratings res", ratingsRes)
                            for (let i = 0; i < ratingsRes.data.length; i++){
                                for (let j = 0; j < res.data.length; j++) {
                                    // console.log(ratingsRes.data[i].VenueId, res.data[j].id)
                                    if (ratingsRes.data[i].BandId === res.data[j].id) {
                                        res.data.splice(j, 1)
                                    }
            
                                }
                            }
                            console.log("spliced ratings ", res.data)
                            this.setState({ratings: res.data})
                        })
                    })
                    

                })
        }
        else if (this.props.userType === "artist") {
            API.getReadyVenues()
                .then(res => {
                    console.log("res.data", res.data);
                    for (let i = 0; i < res.data.length; i++){
                        API.calculateRatingById("venue", res.data[i].id)
                        .then(ratingRes => {
                            res.data[i].rating = ratingRes.data.rating
                            this.setState({ data: res.data })
                            console.log("res.data", ratingRes)

                        })
                    }
                }
                )
                .catch(err => console.log(err));
            API.getVenues()
                .then(res => {

                    API.getUser().then(userRes => {
                        API.getRatingsbyId(userRes.data.user.userType, userRes.data.user.id)
                        .then(ratingsRes => {
                            console.log("ratings res", ratingsRes)
                            for (let i = 0; i < ratingsRes.data.length; i++){
                                for (let j = 0; j < res.data.length; j++) {
                                    // console.log(ratingsRes.data[i].VenueId, res.data[j].id)
                                    if (ratingsRes.data[i].VenueId === res.data[j].id) {
                                        res.data.splice(j, 1)
                                    }
            
                                }
                            }
                            console.log("spliced ratings ", res.data)
                            this.setState({ratings: res.data})
                        })
                    })
                    

                })
        }
    }


    render() {
        console.log("early data", this.state.data)
        return (
            <div className="main">
                <MainMiddle userType={this.props.userType} url={this.props.url} name={this.props.name}/>
                {/* <MainSide userType={this.props.userType} data={this.state.data}/> */}
                <MainSide userType={this.props.userType} data={this.state.data} ratings={this.state.ratings}/>
            </div>
        )
    }

}

export default Main;