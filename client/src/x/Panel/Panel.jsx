import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
});

class ControlledExpansionPanels extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    // panelGenerator = (props) => {
    //     <ExpansionPanel expanded={expanded === `panel + ${props.num}`} onChange={this.handleChange(`panel + ${props.num}`)}>
    //                 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
    //                     <Typography className={classes.heading}>{props.title}</Typography>
    //                     <Typography className={classes.secondaryHeading}>{props.subtitle}</Typography>
    //                 </ExpansionPanelSummary>
    //                 <ExpansionPanelDetails>
    //                     <Typography>
    //                         {props.description}
    //         </Typography>
    //                 </ExpansionPanelDetails>
    //             </ExpansionPanel>
    // }

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        return (
            <div className={classes.root}>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Band Name</Typography>
                        <Typography className={classes.secondaryHeading}>Band Statistics/Info</Typography>
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
                        <Typography className={classes.heading}>Band Name</Typography>
                        <Typography className={classes.secondaryHeading}>
                            Band Statistics/Info
                            </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                            diam eros in elit. Pellentesque convallis laoreet laoreet.
            </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Band Name</Typography>
                        <Typography className={classes.secondaryHeading}>
                        Band Statistics/Info
            </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                            eros, vitae egestas augue. Duis vel est augue.
            </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Band Name</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                            eros, vitae egestas augue. Duis vel est augue.
            </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

ControlledExpansionPanels.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);