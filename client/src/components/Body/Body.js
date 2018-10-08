import React, { Component } from 'react';
import Main from "../Main";
import Navigate from "../Navigate";

import "./body.css"


class Body extends Component {

    render() {

        return (
            <div className="bodyWrap">
                <Navigate />
                <Main />
            </div>
        )
    }

}

export default (Body);