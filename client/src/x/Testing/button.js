import React from "react";

const Button = props => (
    <button onClick = {()=> {props.handleClick}}></button>

);

export default Button;