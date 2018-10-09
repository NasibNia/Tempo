import React, { Component } from 'react';
import Main from "../Main";
import Navigate from "../Navigate";
import HeaderBar from "../HeaderBar";

import "./body.css";


class Body extends Component {

    
    render() {

        return (
            <div>
                <HeaderBar/>
                <div className="body-wrap">
                    <Navigate />
                    <Main />
                </div>
            </div>
        )
    }

}

export default (Body);