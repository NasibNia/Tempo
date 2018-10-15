import React from 'react';
import MainSide from "./MainSide";
import MainMiddle from "./MainMiddle";
import "./Main.css";

const Main = props => {
    return (
        <div className="main">
            <MainMiddle userType={props.userType} url={props.url}/>
            <MainSide userType={props.userType} />
        </div>
    )
}

export default Main;