import React, { Component } from 'react';
import API from "../../../../../utils/API";
import Panel from "../../../../Panel";
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
                return (<div id="calendar">
                    <Calendar style={
                        'width=100%'}/>
                </div>
                );
            case "gigboard":
                return (
                    <div>
                        <h1>{this.state.name}</h1>
                        <Panel />
                    </div>                                    
                );
            default:
                return <h1>Haha LOL</h1>

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