import React from 'react';
import MainSide from "./MainSide";
import MainMiddle from "./MainMiddle";
import "./Main.css";

const Main = props => {
    return (
        <div className="main">
            <MainMiddle />
            <MainSide />
        </div>
    )
}

export default Main;