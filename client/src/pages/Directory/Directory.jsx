import React, { Component } from 'react';
import Body from "../../components/Body";
import HeaderBar from "../../components/HeaderBar";
import Paper from '@material-ui/core/Paper';
import Navigate from "../../components/Body/Navigate";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import Panel from "../../components/Panel";

import { withStyles } from '@material-ui/core/styles';

import API from "../../utils/API";

import "./Directory.css";


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "column"
    },
    paper: {
        borderTop: `7px solid ${theme.palette.secondary.main}`,
        marginTop: theme.spacing.unit * 10,
        marginBottom: theme.spacing.unit * 6,
        margin: "auto",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        width: "400px",
        height: "auto"
    },
    avatar: {
        margin: "auto",
        backgroundColor: theme.palette.secondary.dark
        // border: `2px inset ${theme.palette.secondary.dark}`
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    button: {
        display: 'block',
        // padding: "15px"
    },
    formControl: {
        marginTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        minWidth: 120
    },
    stepper: {
        marginTop: theme.spacing.unit * 10,
        marginBottom: theme.spacing.unit,
        margin: "auto",
        width: "80%"
    },
    buttonSuccess: {
        backgroundColor: "#4CAF50",
        '&:hover': {
            backgroundColor: "rgb(58, 129, 61)",
        },
    },
    buttonProgress: {
        color: "#4CAF50",
        position: 'relative',
        bottom: '20px',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    link: {
        textAlign: "center",
        transition: "0.2s ease-in-out",
        '&:hover': {
            textDecoration: "underline",
            letterSpacing: "1px",
            color: theme.palette.secondary.dark

        }

    }
});


class Directory extends Component {
    state = {
        loggedIn: true,
        userType: "",
        userId: 0,
        name: "",
        pic: "",
        directorySearch: "",
        data: []

    }


    componentDidMount() {

        API.getUser().then(res => {
            if (!res.data.user) {
                this.setState({ loggedIn: false });
                window.location.href = "/signin";
            }
            else {
                console.log("Directory Mounting Check", res.data, res.data.user.id);
                if (res.data.user.userType === "artist") {
                    this.setState({
                        loggedIn: true,
                        userId: res.data.user.id,
                        name: res.data.user.name,
                        userType: res.data.user.userType,
                        pic: res.data.user.profilePic

                    });

                    this.loadVenues();
                }
                else if (res.data.user.userType === "venue") {
                    this.setState({
                        loggedIn: true,
                        userId: res.data.user.id,
                        name: res.data.user.name,
                        userType: res.data.user.userType,
                        pic: res.data.user.profilePic

                    });
                    this.loadBands();
                }
            }
        });
    }

    loadBands = () => {
        API.getBands()
            .then(res => {
                // console.log(res);
                this.setState({ data: res.data })
            }
            )
            .catch(err => console.log(err));
    };

    loadVenues = () => {
        API.getVenues()
            .then(res => {
                this.setState({ data: res.data })
            }
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({ [name]: value });

    };

    handleSearch = () => {
        let searchedName = this.state.directorySearch;

        // console.log(this.state.search)
        // API.getBandName(searchedName).then(res => {
        //     if (!res.data) {
        //         console.log("Artist profile does not exist!")
        //     } else {
        //         console.log(res.data)
        //         window.location.href = "/profile/" + res.data.id;
        //     }
        // });


    }

    render() {
        const { classes } = this.props;
        let searchText = this.state.userType === "artist" ? "Search Venue Directory" : "Search Artist Directory"

        return (
            <div>
                <HeaderBar />

                <div className="body-wrap" >
                    {/* ADD A CLASS TO THIS DIV */}
                    <Navigate method={this.changeState} userType={this.state.userType} name={this.state.name} pic={this.state.pic} userId={this.state.userId} />


                    <div className="directory-box-wrap">
                        <h1>{this.state.userType === "artist" ? "Venue" : "Artist"} Directory</h1>
                        {/* <h2>Search for Tempo Affiliates!</h2> */}

                        <div id="search-directory">
                            <TextField
                                id="search-bar-directory"
                                label={searchText}
                                // className={classes.textField}
                                type="search"
                                name="directorySearch"
                                autoComplete="search"
                                margin="normal"
                                variant="filled"
                                onChange={this.handleInputChange}
                                value={this.state.directorySearch}
                            // onKeyPress={this.handleKeyPress}
                            // helperText={this.state.errors.email}
                            />
                            <Button className={classes.button}
                                id="search-directory-button"
                                variant="contained"
                                color="secondary"
                                onClick={this.handleSearch}>
                                <i class="fas fa-search" id="search-icon"></i>
                            </Button>
                        </div>
                        {/* Add a Search Bar here in the future */}
                        <p className="directory-text">Showing {this.state.data.length} out of {this.state.data.length} venues</p>
                        <Panel data={this.state.data} />

                    </div>

                </div>
            </div>

        );
    }

}

export default withStyles(styles)(Directory);