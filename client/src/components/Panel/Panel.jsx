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
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    // function to dynamically generate panel elements based on specific database information passed    
    panelGenerator = (elem, classes, expanded) => {
        return(
        <ExpansionPanel expanded={expanded === `panel + ${elem.num}`} onChange={this.handleChange(`panel + ${elem.num}`)}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>{elem.title}</Typography>
                        <Typography className={classes.secondaryHeading}>{elem.subtitle}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {elem.description}
            </Typography>
                    </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        return (
            <div className={classes.root}>
                {test.map(elem => 
                    this.panelGenerator(elem, classes, expanded) )                 
                }
                {/* <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>                   
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>List Name</Typography>
                        <Typography className={classes.secondaryHeading}>List Subtitle</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                            maximus est, id dignissim quam.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>                   
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>List Name</Typography>
                        <Typography className={classes.secondaryHeading}>List Subtitle</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                            maximus est, id dignissim quam.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>                   
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>List Name</Typography>
                        <Typography className={classes.secondaryHeading}>List Subtitle</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                            maximus est, id dignissim quam.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>                   
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>List Name</Typography>
                        <Typography className={classes.secondaryHeading}>List Subtitle</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                            maximus est, id dignissim quam.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel> */}

            </div>
        );
    }
}

ControlledExpansionPanels.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);
