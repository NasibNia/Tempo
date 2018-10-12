import React, { Component } from 'react';
import API from "../../../../../../utils/API";
import Panel from "../../../../../Panel";
import "./WidgetItem.css"
import Calendar from 'react-calendar';
import { Radar } from 'react-chartjs-2';

const radarData = {
    labels: ['Attendance', 'Ticket Price', 'Performance Rating', 'Musicianship', 'Showmanship', 'Commercial Viablity', 'Sajeel'],
    datasets: [
        {
            label: 'The Fillmore 09092018',
            backgroundColor: 'rgba(249, 198, 132, 0.2) ',
            borderColor: '#F9C784',
            pointBackgroundColor: '#F9C784',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#F9C784',
            data: [5, 5, 3, 3, 1, 2, 3]
        },
        {
            label: 'The Ritz 09172018',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [5, 2, 3, 1, 5, 3, 3]
        }
    ]
};

const handleClicked = () => {

    console.log(API.getBands())

}

handleClicked()

class WidgetItem extends Component {

    state = {
        shows: [],
        bands: [],
        venues: []
    };

    componentDidMount() {
        this.loadShows();
        this.loadBands();
        this.loadVenues();

    }

    loadShows = () => {
        API.getShows()
            .then(res => {
                // console.log(res);
                this.setState({ shows: res.data })
            }
            )
            .catch(err => console.log(err));
    };

    loadBands = () => {
        API.getBands()
            .then(res => {
                // console.log(res);
                this.setState({ bands: res.data })
            }
            )
            .catch(err => console.log(err));
    };

    loadVenues = () => {
        API.getVenues()
            .then(res => {
                this.setState({ venues: res.data })
                }
            )
            .catch(err => console.log(err));
    };

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
                        {console.log(this.state.shows)}
                        <Panel data={this.state.shows} />
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
                        <Panel data={this.state.venues} />
                    </div>
                );
            case "artist directory":
                return (
                    <div id="artist-directory">
                        <Panel data={this.state.bands} />
                    </div>
                );
            case "community events":
                return (
                    <div id="community-events">
                        <Panel />
                    </div>
                );
            case "your profile":
                return (
                    <div>
                        <div id="your-profile">
                            <div class="profile-picture-large">
                            </div>
                            <div class="profile-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisi ipsum, tempor ac lorem a, fringilla consequat lorem. Etiam congue enim arcu, at molestie dui porta et. Nullam in tristique mi. Maecenas ullamcorper, est sed aliquet placerat, arcu diam rutrum velit, sed gravida ante felis in lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam eu finibus lorem. Nulla mattis tellus eu mi tempor volutpat. Aliquam nec vestibulum augue. Morbi enim leo, vulputate a efficitur vel, molestie vitae nibh. Nullam porttitor scelerisque dapibus.
                    </p></div>
                        </div>
                        <h1 style={{ marginTop: "20px" }}>Your Statistics</h1>
                        <Radar
                            data={radarData}
                            ref='chart'
                            width={100}
                            height={100}
                            options={{
                                maintainAspectRatio: false
                            }}
                        />
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