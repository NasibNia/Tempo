import React, { Component } from 'react';
import HeaderBar from "../../components/HeaderBar";
import SignUp from "../../components/SignUp";

import "./signup.css"

class SignUpPage extends Component {
    state = {}

    render() {
        return (
            <div>
                <HeaderBar />
                <SignUp />
            </div>
        )
    }
}

export default SignUpPage