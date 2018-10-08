import React, { Component } from 'react';
import Header from "../../components/Header"
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "column"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});


class SignUp extends Component {

    state = {

    };

    //   componentDidMount() {}


    render() {

        return (
            <div>
                <Header />
                <form className={styles.container} noValidate autoComplete="off" style={{ marginTop: "5%" }}>
                <h2>Sign Up as a Tempo Affiliate!</h2>
                    <TextField
                        id="filled-email-input"
                        label="Email"
                        className={styles.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-password-input"
                        label="Password"
                        className={styles.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="filled"
                    />
                </form>
            </div>


        )
    }

}

export default SignUp;