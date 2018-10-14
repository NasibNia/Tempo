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
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    borderBox: {

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
        return (
            <ExpansionPanel key={this.keyCount} expanded={expanded === `panel + ${elem.id}`} onChange={this.handleChange(`panel + ${elem.id}`)}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>{elem.name}</Typography>
                    <Typography className={classes.secondaryHeading}>{
                        (() => {
                            if (elem.date) {
                                return elem.date
                            }
                            else if (elem.address) {
                                return (elem.address + " " + elem.city + " " + elem.state + " " + elem.zip)
                            }
                            else {
                                return elem.rating
                            }
                        })
                    }</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        {elem.time_start
                            ? <div>
                                <p>Start Time: {elem.time_start}</p>
                                <p>End Time: {elem.time_start}</p>
                            </div> : elem.description}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;
        let model = this.props.data;
        console.log("model", model)

        return (
            <div className={classes.root}>
                {/* {console.log("Panel Info"), this.state.info} */}
                {(model
                ) ? model
                    .map(elem =>
                        this.panelGenerator(elem, classes, expanded)) : <h1>Come back later for more data little BOYYY.</h1>
                }
            </div>
        );
    }
}

ControlledExpansionPanels.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);
