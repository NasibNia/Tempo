import React, { Component } from 'react';

import Navigate from "../Navigate";

import "./body.css"


class Body extends Component {

    render() {

        return (
            <div>
                <Navigate />
                <Main />
            </div>
        )
    }

}

export default (Body);