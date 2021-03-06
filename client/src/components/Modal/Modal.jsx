import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import { withStyles } from '@material-ui/core/styles';

// Utilities
import API from "../../utils/API";

import "./Modal.css"

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginTop: theme.spacing.unit
    },
    button: {
        margin: "10px auto",
        width: "100%",
        transition: "0.3s ease-in-out",
        // fontWeight: "bold",
        textAlign: "center",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            color: "white"
        }
    },
    message: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    successMessage: {
        backgroundColor: "#4CAF50",
        transition: "0.3s ease-in-out",
        '&:hover': {
            backgroundColor: "rgb(58, 129, 61)",
        }
    }
});


class Modal extends React.Component {
    state = {
        open: false,
        openSuccessMessage: false,
        title: "",
        data: {
            name: "",
            date: "",
            time_start: "",
            time_end: ""
        }
    };

    componentDidMount() {
        // returns an object of all the params, sent down from VenueHome
        // console.log("modal url", this.props.url)
        // parses just the number, or just the /:user/ from the url path
        // console.log("parse test", this.props.url.url.match(/\d+/)[0])
        // console.log("url test", this.props.url.url.replace(/[0-9]/g, ''))

    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false, openSuccessMessage: false });
        //temporary tester
        // console.log(this.state.data)
    };

    // handleChange = event => {

    //     const { name, value } = event.target;
    //     this.setState({ [name]: value });
    // };

    handleInputChange = event => {
        //creating copy of object
        let data = Object.assign({}, this.state.data);
        //updating value    
        data[event.target.name] = event.target.value;
        this.setState({ data });
    };

    handlePost = () => {
        console.log(this.state.data)
        API.saveShow(this.state.data, this.props.userType, this.props.userID)
            .then(res => {
                console.log(res);
                this.setState({ open: false, openSuccessMessage: true });

                setTimeout(() => {
                    window.location.href = "/postgig/selectartists"
                }, 2000)
            }
            )
            .catch(err => console.log(err));
    };

    render() {
        const { classes } = this.props;
        let modal;

        if (this.props.postType === "show") {
            modal = (
                <DialogContent>
                    <DialogContentText>
                        Post an upcoming show to the Gig Board!
                </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        name="name"
                        fullWidth
                        onChange={this.handleInputChange}
                        value={this.state.data.name}
                    />
                    <TextField
                        id="date"
                        label="Date of Show"
                        type="date"
                        // defaultValue="2018-01-01"
                        name="date"
                        className={classes.textField}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange = {this.handleInputChange}
                        value={this.state.data.date}

                    />
                    <TextField
                        id="time_start"
                        label="Start Time"
                        type="time"

                        // defaultValue="19:30"
                        className={classes.textField}
                        name="time_start"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                        onChange={this.handleInputChange}
                        value={this.state.data.time_start}

                    />
                    <TextField
                        id="time_end"
                        label="End Time"
                        type="time"
                        // defaultValue="23:30"
                        className={classes.textField}
                        name="time_end"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                        onChange={this.handleInputChange}
                        value={this.state.data.time_end}

                    />
                </DialogContent>)
        }

        return (
            <div>
                <Button className={classes.button} color="secondary" variant="outlined" onClick={this.handleClickOpen}>Click here to post a {this.props.postType.toUpperCase()}</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Post a {this.props.postType}</DialogTitle>
                    {modal}
                    <DialogActions>
                        <Button onClick={this.handleClose} color="secondary">
                            Cancel
              </Button>
                        <Button onClick={this.handlePost} color="primary">
                            Post {this.props.postType.toUpperCase()}
                        </Button>
                    </DialogActions>
                </Dialog>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.openSuccessMessage}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                >
                    <SnackbarContent
                        onClose={this.handleClose}
                        className={classes.successMessage}
                        message={
                            <span className={classes.message}>
                                <CheckCircleIcon style={{ marginRight: "5px" }} />
                                {"The show has been posted to the board!"}
                            </span>}
                        action={[
                            <IconButton
                                key="close"
                                aria-label="Close"
                                color="inherit"
                                className={classes.close}
                                onClick={this.handleClose}
                            >
                                <CloseIcon className={classes.icon} />
                            </IconButton>
                        ]}
                    />
                </Snackbar>
            </div>
        );
    }
}

export default withMobileDialog()(withStyles(styles)(Modal));  