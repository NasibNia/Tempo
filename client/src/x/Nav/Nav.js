import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

//Temporary Nav 

class Nav extends Component {

    render() {
        return (
            <div id = "nav">
                <p className="title" onClick={this.props.onClick}>Nav</p>
                <hr></hr>
                test
            </div>
        )
    }
}

export default Nav;