import React, { Component } from 'react';
import API from "../../../../../../utils/API";
import Panel from "../../../../../Panel";
import "./WidgetItem.css"
import Calendar from 'react-calendar';

class WidgetItem extends Component {

    state = {
        shows: [],
        name: "",
        description: "",
        statistics: ""
    };

    // componentDidMount() {
    //     this.loadShows();
    // }

    // loadShows = () => {
    //     API.getShows()
    //         .then(res =>
    //             this.setState({ shows: res.data, name: "", description: "", statistics: "" })
    //         )
    //         .catch(err => console.log(err));
    // };

    checkType = (props) => {
        switch (props.type) {
            case "calendar":
                return (
                    <div id="calendar">
                        <Calendar />
                    </div>
                );
            case "gig board":
                return (
                    <div>
                        <Panel />
                    </div>
                );
            case "post gig":
                return (
                    <div id="post-gig">
                        <h1>Post a gig here</h1>
                    </div>
                );
            case "past gigs":
                return (
                    <div id="past-gigs">
                    </div>
                );
            case "venue directory":
                return (
                    <div>
                        <Panel />
                    </div>
                );
            case "artist directory":
                return (
                    <div id="artist-directory">
                        <Panel />
                    </div>
                );
            case "your profile":
                return (
                    <div id="your-profile">
                        <h1>Your Profile</h1>
                    </div>
                );
            default:
                return <h1>Error, malfunction, hide, run, get out now!!!</h1>

        }
    }

    render() {

        return (
            <div className="widget-item">
                {this.checkType(this.props)}
            </div>

        )
    }
}

export default WidgetItem;