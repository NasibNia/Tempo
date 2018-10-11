import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import "./HeaderBar.css";
import { Link } from 'react-router-dom'

class HeaderBar extends Component {
  render(props) {

    return (
      <div className="header">
        <div className="header-contents">
<<<<<<< HEAD
          <div className="logo">          
            <h1><Link to="/artist">Tempo</Link></h1>
            <h4>{this.props.userType} suite</h4>
=======
          <div className="logo">
            <h1>Tempo</h1>
>>>>>>> 91eda2f9160c826154e6a5fdfc8aed09dba7ac38
          </div>
          <div className="header-items">
            <div className="header-item">
              <div className="header-icon"></div>
            </div>
            <div className="header-item">
              <div className="header-icon"></div>
            </div>
            <div className="header-item">
              <div className="header-icon"></div>
            </div>
            <div className="header-item">
              <div className="header-icon"></div>
            </div>
            <div className="header-item">
              <div className="header-icon"></div>
            </div>
            <div className="log-out-button">
<<<<<<< HEAD
              <h2>LOG OUT</h2>
            </div>
=======
              <Button variant="contained" color="secondary">
                LOG OUT
            </Button>
            </div>

>>>>>>> 91eda2f9160c826154e6a5fdfc8aed09dba7ac38
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBar;