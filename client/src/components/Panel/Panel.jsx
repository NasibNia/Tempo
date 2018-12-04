import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./panel.css"

const styles = theme => ({
    root: {
        width: '100%',
    },
    panel: {
        boxShadow: "none"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        color: theme.palette.primary.light,
        textTransform: "capitalize"
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        textTransform: "uppercase"
    },
    summary: {
        transition: "0.3s ease-in-out",
        '&:hover': {
            backgroundColor: "rgba(255, 117, 96, 0.350)",
            color: "white",
            borderRadius: "5px"
        }
    },
    information: {
        display: "flex",
        justifyContent: "space-evenly",
        lineHeight: "1.5"
    },
    venueImage: {
        maxHeight: "188px",
        maxWidth: "250px",
        borderRadius: "5px",
        marginLeft: "5px",
        marginRight: "10px"
    }
});

const test = [
    {
        num: 1,
        title: "List Name",
        subtitle: "List Subtitle",
        description: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."
    }
    ,
    {
        num: 2,
        title: "List Name 2",
        subtitle: "List Subtitle 2",
        description: "Blah blah blah."
    }
]

class ControlledExpansionPanels extends React.Component {
    state = {
        expanded: null,
        info: this.props.data
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    //create an individual key for each panel
    keyCount = 0;
    // function to dynamically generate panel elements based on specific database information passed    
    panelGenerator = (elem, classes, expanded) => {
        this.keyCount++;
        let subtitle;
        let information;
        let image;

        // Subtitle conditionals
        if (elem.date) {
            subtitle = elem.date;
        }
        else if (elem.address) {
            // subtitle = (elem.address + " " + elem.city + " " + elem.state + " " + elem.zip)
            //temporary line below for seeders
            subtitle = (elem.address);
        }
        else if(elem.rating) {
            subtitle = elem.rating;
        }
        else{
            let genres = [];
            if(elem.genres){
                for(var i = 0; i < Object.keys(JSON.parse(elem.genres)).length; i++){
                if(JSON.parse(elem.genres)[Object.keys(JSON.parse(elem.genres))[i]] === true){
                    genres.push(Object.keys(JSON.parse(elem.genres))[i]);
                }
            }
            }
            
            subtitle = genres.join(", ");
        }

        // Image conditionals
        if (elem.profilePic) {
            image = elem.profilePic;
        }
        else if (elem.venue_picture_url) {
            image = (elem.venue_picture_url);
        }
        else {
            image = "";
        }

        // Information conditionals
        if (elem.description) {
            information = elem.description;
        }
        else if (elem.time_start) {
            information =
                <div>
                    <p>Start Time: {elem.time_start}</p>
                    <p>End Time: {elem.time_start}</p>
                </div>;
        }
        else {
            information =
                <div>
                    <p>Capacity: {elem.capacity}</p>
                    <p>Ticket Price: {elem.average_ticket_price}</p>
                    <p>Rating: {elem.rating}</p> 
                    <a href={elem.website} className = "panelVenueLink">Learn More</a>
                </div>;
        }



        return (
            <ExpansionPanel key={this.keyCount} expanded={expanded === `panel + ${elem.id}`} onChange={this.handleChange(`panel + ${elem.id}`)} className={classes.panel}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.summary} id="summary">
                    <Typography className={classes.heading} id="heading">{elem.name}</Typography>
                    <Typography className={classes.secondaryHeading}>{subtitle}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className = {classes.information}>
                        <img src = {image} className = {classes.venueImage} />
                        {information}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;
        let model = this.props.data;
        // console.log("model", model)

        return (
            <div className={classes.root}>
                {/* {console.log("Panel Info"), this.state.info} */}
                {(model
                ) ? model.slice(0, 9)
                    .map(elem =>
                        this.panelGenerator(elem, classes, expanded)) : <h1>Stay tuned for exciting updates!</h1>
                }
            </div>
        );
    }
}

ControlledExpansionPanels.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);
