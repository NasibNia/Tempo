import React, { Component } from 'react';
import Body from "../../components/Body";
import HeaderBar from "../../components/HeaderBar";
import Paper from '@material-ui/core/Paper';
import Navigate from "../../components/Body/Navigate";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import io from 'socket.io-client';
import API from "../../utils/API";
import "./NewsFeed.css";


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
        marginTop: theme.spacing.unit * 2
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


class NewsFeed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: [],

            user: "artist",
            loggedIn: true,
            newsFeed: [],
            userType: "", 
            pic: "",
            userId: 0
        };

    }

    componentDidMount() {

        API.getUser().then(res => {
            console.log("newsfeed component mounting check", res.data);
            if (!res.data.user) {
                window.location.href = "/signin";
                // } else if (res.data.user.userType === "venue") {
                //     window.location.href = "/signin";

            } else {

                console.log("the user name is ", res.data.user.name);
                this.setState({
                    username: res.data.user.name,
                    userType: res.data.user.userType,
                    userId: res.data.user.userId,
                    pic: res.data.user.profilePic
                });

                // this.setState({ pic:res.data.user.profilePic});

            }
        });

        API.getNews()
            .then(res => {
                console.log("news is", res.data.data);
                this.state.messages = res.data;
            });

        //Socket.io
        // this.socket = io.connect('http://localhost:3001');
        this.socket = io.connect();


        this.socket.on('RECEIVE_MESSAGE', function (data) {
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({ messages: [...this.state.messages, data] });
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            // first add it to the data base

            API.saveNews({
                author: this.state.username,
                message: this.state.message
            });

            // then emit it to the world
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            });
            this.setState({ message: '' });

        };


    }

    render() {
        const { classes } = this.props;
        console.log(this.state.messages);

        return (
            <div>
                <HeaderBar />

                <div className="body-wrap" >
                    {/* ADD A CLASS TO THIS DIV */}
                    <Navigate method={this.changeState} userType={this.state.userType} name={this.state.username} pic={this.state.pic} userId = {this.state.userId}/>


                    <div className="message-box-wrap">
                        <div className="send-message">
                            {/* <TextField type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                        <br/> */}
                            <TextField type="text" placeholder="Message" className="send-message-text-field" value={this.state.message} onChange={ev => this.setState({ message: ev.target.value })} />
                            <br />
                            <Button className="send-message-button" variant="contained"
                                color="primary" onClick={this.sendMessage} color="primary">Send</Button>
                        </div>
                        <div className="message-box">
                            {this.state.messages.map(message => {
                                return (
                                    <div className="message-item"><div className="small-profile-tile" style={{ backgroundImage: "url(" + {} + ")" }}></div><h3>{message.author} </h3><p> :  {message.message}</p></div>
                                );
                            })}
                        </div>
                        <div className="message-header">
                            <h1>What's Going on In Tempo</h1>
                            <p></p>
                        </div>
                    </div>

                </div>
            </div>

        );
    }

}

export default NewsFeed;