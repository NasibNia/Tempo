import React, { Component } from 'react';
import SignUp from "../../components/SignUp"
import HeaderBar from "../../components/HeaderBar"

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